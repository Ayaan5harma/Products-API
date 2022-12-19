const express = require('express');
const router = express.Router();
const {getallproducts,getallproductstesting} = require("../controllers/project")
router.route("/").get(getallproducts);
router.route("/testing").get(getallproductstesting);

module.exports = router;