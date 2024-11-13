const express = require("express");
const router = express.Router();

const controller = require('../../controllers/admin/product.controller');

router.patch('/products/change-status/:status/:id',controller.changeStatus);
router.patch('/products/change-multi',controller.changeMulti);
router.get('/products',controller.index);


module.exports = router;