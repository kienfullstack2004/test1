const Product = require("../../models/product.model");
const filterStatusHelpers = require('../../helpers/filterStatus');
const searchHelpers = require('../../helpers/search');
const paginationHelpers = require('../../helpers/pagination');

// [GET] /admin/products
module.exports.index = async (req, res) => {
    const filterStatus = filterStatusHelpers(req.query);
    const find = {
        deleted: false
    }

    if (req.query.status) {
        find.status = req.query.status;
    }

    // 
    const objectSearch = searchHelpers(req.query);

    if (objectSearch.regex) {
        find.title = objectSearch.regex;
    }

    // Pagination
    const countProducts = await Product.countDocuments(find);
    let objectPagination = paginationHelpers({
        currentPage: 1,
        limitItems: 4,

    },
        req.query, countProducts
    );



    // End Pagination

    const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);

    console.log(objectPagination);


    res.render("admin/pages/products/index", {
        title: 'Danh sách sản phẩm',
        product: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
}


// [PATCH] /admin/products/:status/:id
module.exports.changeStatus = async (req, res) => {
    const { status, id } = req.params;

    await Product.updateOne({ _id: id }, {
        status: status
    })
    res.redirect('back');
}

// [PATCH] /admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
    const { type, ids } = req.body;
    const arrIds = ids.split(",");

    // arrIds.map(async (item) => {
    //     await Product.updateOne({ _id: item }, { status: type })
    // })
    await Product.updateMany({ _id: { $in: arrIds } }, { status: type });

    res.redirect('back');
}