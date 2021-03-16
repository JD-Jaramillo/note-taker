const notesData = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notesData));

    app.post('/api/notes', (req, res) => {
        notesData.push(req.body)
        res.json(true);
    })

    app.get('api/notes/:id', (req, res) => {
        const { id } = req.params;
        notesData.find(id);
        res.json(notesData);
    })

    app.delete('/api/notes:id', (req, res) => {
        notesData.remove({
            id: require.params
        }),
            function (err, user) {
                if (err) {
                    return res.send(err);
                }
            }
        res.json({ message: 'deleted' });
    })

}