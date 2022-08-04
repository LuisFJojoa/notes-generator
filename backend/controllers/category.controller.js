const db = require("../models");
const Note = db.note;
const Category = db.category;

exports.create = (category) => {
  return Category.create({
    name: category.name,
  })
    .then((category) => {
      console.log(">> Created Category: " + JSON.stringify(category, null, 2));
      return category;
    })
    .catch((err) => {
      console.log(">> Error while creating Category: ", err);
    });
};

exports.findAll = () => {
  return Category.findAll({
    include: [
      {
        model: Note,
        as: "notes",
        attributes: ["id", "title", "content", "categories"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((categories) => {
      return categories;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Tags: ", err);
    });
};

exports.addTutorial = (categoryId, noteId) => {
  return Category.findByPk(categoryId)
    .then((category) => {
      if (!category) {
        console.log("Tag not found!");
        return null;
      }
      return Note.findByPk(noteId).then((note) => {
        if (!note) {
          console.log("Note not found!");
          return null;
        }
        category.addTutorial(note);
        console.log(`>> added Note id=${note.id} to Tag id=${category.id}`);
        return category;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Note to Tag: ", err);
    });
};