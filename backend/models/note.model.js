module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define("note", {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    categories: {
      type: Sequelize.JSON
    }
  });
  return Note;
};