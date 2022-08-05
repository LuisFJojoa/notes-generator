const db = require("../models");
const Note = db.note;
const Category = db.category;

exports.create = (req, res) => {

  const category = req.body;

  console.log(category);
  return Category.create({
    name: category.name,
  })
    .then((category) => {
      console.log(">> Created Category: " + JSON.stringify(category, null, 2));
      res.send(category);
    })
    .catch((err) => {
      console.log(">> Error while creating Category: ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};

exports.addNote = (req, res) => {
  const {categoryId, noteId} = req.body
  Category.findByPk(categoryId)
    .then((category) => {
      if (!category) {
        console.log("Category not found!");
        return null;
      }
      return Note.findByPk(noteId).then((note) => {
        if (!note) {
          console.log("Category not found!");
          return null;
        }
        category.addNote(note);
        console.log(`>> added Note id=${note.id} to Category id=${category.id}`);
        res.send(category);
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Note to Category: ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding note to Category."
      });
    });
};

exports.findById = (req, res) => {
  Category.findByPk(req.query.id, {
    include: [
      {
        model: Note,
        as: "notes",
        attributes: ["id", "title", "content", "state", "categories"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((category) => {
      res.send(category);
    })
    .catch((err) => {
      console.log(">> Error while finding Category: ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding Category."
      });
    });
};