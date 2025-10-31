const express = require("express");
const router = express.Router();
const Note = require("../models/note");
const remplirBasedeDonnee = require("../models/faker");

console.log("remplirBasedeDonnee => " + remplirBasedeDonnee);

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    // console.log(note);
    if (!note) return res.status(404).json({ error: "Note non trouvé !" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newNote = new Note(req.body);
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/generer-notes', async (req,res) => {
  try {
    const { nombre } = req.body;
    await remplirBasedeDonnee(nombre);
    res.json({ message: 'Notes généré avec succés.'});
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

module.exports = router;