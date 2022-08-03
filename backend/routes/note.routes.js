module.exports = app => {
  const notes = require("../controllers/note.controller.js");
  var router = require("express").Router();

  // Create a new Note
  router.post("/", notes.create);

  // Retrieve all notes by state
  router.get("/", notes.findAllNotesByState);
 
  // Update a Tutorial with id
  router.put("/:id", notes.update);

  // Delete a Tutorial with id
  router.delete("/:id", notes.delete);
  
  app.use('/api/notes', router);
};