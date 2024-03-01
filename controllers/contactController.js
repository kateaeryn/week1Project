const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Contacts']
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
}

const getSingle = async (req, res) => {
    //#swagger.tags=['Contacts']
    const contactId = new objectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: contactId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
}

const newContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
    }
    const result = await mongodb.getDatabase().db().collection('users').insertOne(contact);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "some error occured while creating contact")
    }
};

const updateContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const contactId = new objectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        favoriteColor: req.body.favoriteColor,
    }
    const result = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: contactId }, contact);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "some error occured while updating contact")
    }
};


const deleteContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const contactId = new objectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: contactId });
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "some error occured while deleting contact")
    }
};


module.exports = {getAll, getSingle, newContact, updateContact, deleteContact}