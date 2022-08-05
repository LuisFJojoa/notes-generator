const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

const NoteController = require("./controllers/note.controller");
const CategoryController = require("./controllers/category.controller");

db.sequelize.sync()
  .then(() => {
    console.log("sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to noteApp backend full rest API application." });
});

const notesRoutes = require("./routes/note.routes.js")
const categoriesRoutes = require("./routes/category.routes")

app.use("/api/notes", notesRoutes)
app.use("/api/categories", categoriesRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});