const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const noteSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
});

const createNote = () => ({
  titre: faker.lorem.lines(2),
  contenu: faker.lorem.paragraphs(5)
});

const generateNotes = (nombre) => Array.from({ length: nombre }, createNote);

async function remplirBasedeDonnee(nombre = 10) {
  const Note = mongoose.model("Note", noteSchema);
  try {
    await Note.deleteMany({});
    const notes = generateNotes(nombre);
    await Note.insertMany(notes);
    return true;
  } catch (error) {
    console.error("Erreur pour remplir la base de donée : ", error);
    throw error;
  }
}

module.exports = {
  Note: mongoose.model('Note', noteSchema),
  remplirBasedeDonnee
};
