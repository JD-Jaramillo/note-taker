const notesData = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notesData));

    app.post('/api/notes', (req, res) => {
        notesData.push(req.body)
        res.json(true);
    })
    // Attempte to be able to select note when clicked on 
    app.get('api/notes/:id', (req, res) => {
        const id = req.params.id;
        notesData.find(id);
        res.json(notesData);
    })
    // Deletes the note
    app.delete('/api/notes/:id', (req, res) => {
        const id = (value) => value.id === req.params.id;
        notesData.splice(notesData.findIndex(id), 1);
        res.json(notesData);
    })
};