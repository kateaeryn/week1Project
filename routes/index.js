const router = require('express').Router();
const contCont = require('../controllers/contactController');

router.get('/', (req, res) => { res.send('Hello World') });

router.get('/contacts', contCont.getAll);

router.get('/contacts/:id', contCont.getSingle);

module.exports = router;