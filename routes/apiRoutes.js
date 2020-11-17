const fs = require("fs");
const dbjson = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(dbjson);
  });

  app.post("/api/notes", function (req, res) {
    const id = uuidv4();
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: id,
    };
    dbjson.push(newNote);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(dbjson),
      (err) => {
        if (err) throw err;
      }
    );
    res.send(newNote);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const noteId = req.params.id;
    const deleteNote = dbjson.findIndex((el) => el.id == noteId);
    dbjson.splice(deleteNote, 1);

    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(dbjson),
      function (err) {
        if (err) throw err;
      }
    );

    res.json(dbjson);
  });
};
