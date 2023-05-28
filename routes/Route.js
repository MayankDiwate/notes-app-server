const express = require("express");
const Note = require("./../models/Notes");
const router = express.Router();

// Read Note
router.post("/list", async (req, res) => {
  var notes = await Note.find({ userId: req.body.userId });
  res.json(notes);
});

// Create Note
router.post("/add", async (req, res) => {
  await Note.deleteOne({ _id: req.body.id });

  const newNote = new Note({
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    color: req.body.color,
  });

  await newNote.save();

  const response = { message: "New note created" + `id : ${req.body.id}` };
  res.json(response);
});

// Delete Note
router.post("/delete", async (req, res) => {
  await Note.deleteOne({ _id: req.body.id });

  const response = { message: "New note created" + `id : ${req.body.id}` };
  res.json(response);
});

module.exports = router;
