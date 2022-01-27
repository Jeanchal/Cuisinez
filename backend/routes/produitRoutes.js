const express = require("express");
const router = express.Router();
const produitController = require("../controllers/produitController");

router.get("/:id", produitController.getOneProduit);

module.exports = router;
