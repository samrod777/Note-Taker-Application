const fs = require("fs");
const dbjason = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');



module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(dbjason);
  });

  app.post("/api/notes", function(req, res) {
    const newNote = {
       title: req.body.title,
       text: req.body.text,
       noteID: req.body.id = uuidv4()
    }
    dbjason.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(dbjason), function(err) {
        if(err) {
            return console.log(err);
        }
        res.json(newNote);
        console.log("The file was updated!");
         })
    });

 
  };

//   app.delete("/api/notes", function(req, res) {
//     var chosen = req.params.id;

//     console.log(chosen);
  
//     for (var i = 0; i < dbjason.length; i++) {
//       if (chosen === id[i]) {
//         return res.json(dbjason[i]);
//       }
//     }


//     // req.body.id = uuidv4()
//     // dbjason.push(req.body);
//     // res.json(dbjason);
//   });



  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  

  

 




// The following API routes should be created:

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.