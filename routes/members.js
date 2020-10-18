const express = require("express");
const router = express.Router();
const members = require("../data/members");
const uuid = require('uuid');



// Get all members
router.get("/", (req, res) => {
  res.json(members);
});

// Get specific members
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ message: `No user for id ${req.params.id}` });
  }
});

// Create Member
router.post('/', (req, res) => {
  const newMember = {
    ...req.body,
    id: uuid.v4(),
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);
});

module.exports = router;