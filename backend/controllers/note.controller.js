const db = require("../models");
const Note = db.note;
const Category = db.category;
const Op = db.Sequelize.Op;

// Create and Save a new Note
exports.create = (req, res) => {

  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Note
  const note = {
    title: req.body.title,
    content: req.body.content,
    state: req.body.state ? req.body.state : 'no-archived',
    categories: req.body.categories

  };
  // Save Note in the database
  Note.create(note)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    });
};

// Update a Note by the id in the request
exports.update = (req, res) => {

  // // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }
  const id = req.params.id;
  Note.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Note was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update note with id=${id}. Maybe Note was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Note with id=" + id
      });
    });

};

// Delete a Note with the specified id in the request
exports.delete = (req, res) => {

  // Validate request
  if (!req.params.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const id = req.params.id;
  Note.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Note was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Note with id=${id}. Maybe Note was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Note with id=" + id
      });
    });

};

// Find all notes by state
exports.findAllNotesByState = (req, res) => {
  console.log(req);
  const state = req.query.state;
  Note.findAll({
    where: { state: state }, include: [
      {
        model: Category,
        as: "categoryes",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        }
      },
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving notes."
      });
    });
};