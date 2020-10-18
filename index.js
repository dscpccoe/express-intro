const express = require("express");
const path = require("path");
const logger = require("./logger");
const ejs = require('ejs')
const members = require("./data/members")
const moment = require('moment')

const app = express();

// Ejs Setup
// app.set("view engine", "ejs");

// Body Parser middleware
// app.use(express.urlencoded({ extended: true }))


// Set static folder
// app.use(express.static(path.join(__dirname, "public")));


// Initializing middleware
// app.use(logger)

// app.get('/',(req,res) => {
//     res.send("<h1>Hello World!</h1>")
// })

// // Get all members
// app.get("/api/members", (req, res) => {
//   res.json(members);
// });

// // Get specific members
// app.get("/api/members/:id", (req, res) => {
//   const found = members.some((member) => member.id === parseInt(req.params.id));
//   if (found) {
//     res.json(members.filter((member) => member.id === parseInt(req.params.id)));
//   } else {
//     res.status(400).json({ message: `No user for id ${req.params.id}` });
//   }
// });


// app.use("/api/members",require('./routes/members'))




// app.get('/', function(req, res) {
//     res.render('test.ejs',{members :members});
// });





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
