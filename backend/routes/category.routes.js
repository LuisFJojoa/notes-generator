// Importing the module
const express = require("express")
// Creating express Router
const router = express.Router();

const categories = require("../controllers/category.controller.js");

// Create a new Category
router.post("/", categories.create);

// Create a new Category with Note
router.post("/add", categories.addNote);

// Retrieve category by Id
router.get("/", categories.findById);

// Retrieving all categories by state
router.get("/all", categories.findAll);

module.exports = router;