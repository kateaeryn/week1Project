const router = require('express').Router();
const contCont = require('../controllers/contactController');

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World')
});

router.get('/contacts', contCont.getAll);

router.get('/contacts/:id', contCont.getSingle);

router.post('/contacts', contCont.newContact);

router.put('/contacts/:id', contCont.updateContact);

router.delete('/contacts/:id', contCont.deleteContact);

module.exports = router;