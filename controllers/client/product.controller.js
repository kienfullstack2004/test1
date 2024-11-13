const Product = require("../../models/product.model");

module.exports.product = async (req, res, next) => {
    const products = await Product.find({
        status: "active",
        deleted: false
    });

   products.forEach((item)=>{
        item.priceNew = (item.price*(100 - item.discountPercentage)/100).toFixed(0);
    })

    res.render("client/pages/products/index", { title: 'Product', message: 'Day la trang Product', product: products });
}