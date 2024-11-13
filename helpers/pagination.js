module.exports = (objectPagination, query, countProducts) => {
    if (query.page) {
        objectPagination.currentPage = isNaN(query.page) ? 1 : parseInt(query.page);
    }

    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;


    const totalPage = Math.ceil(countProducts / objectPagination.limitItems);
    objectPagination.totalPage = totalPage;

    return objectPagination
}