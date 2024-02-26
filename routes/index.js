const router = require('express').Router();
const userCont = require('../controllers/userController');

router.get('/', (req, res) => { res.send('Hello World') });

router.get('/users', userCont.getAll);

router.get('/users/:id', userCont.getSingle);

module.exports = router;