const express = require('express');
const router = express.Router();

let users = [{id: 1, name: 'Raffi', username: 'raf@elmejor.com', password: 'abc123'}, {id: 2, name: 'Sofi', username: 'sof@lamejor.com', password: 'abc123'}];

router.get('/', (req, res) => {
    res.json(users);
})

router.get('/profile/:id', (req, res) => {
    let id = req.params.id;
    let profile = users.find(user => user.id == id);

    res.json(profile);
})

module.exports = router;