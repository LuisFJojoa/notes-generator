// Importing the module
const express = require("express")
// Creating express Router
const router = express.Router();

const notes = require("../controllers/note.controller.js");

// Create a new Note
router.post("/", notes.create);

// Retrieve all notes by state
router.get("/", notes.findAllNotesByState);

// Update a Tutorial with id
router.put("/:id", notes.update);

// Delete a Tutorial with id
router.delete("/:id", notes.delete);

module.exports = router