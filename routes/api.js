/*
* configure api routing
*/

// Class
const express = require('express');
const router = express.Router();
const Joi = require('joi');

// MongoDB
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const mongoUrl = 'mongodb://localhost:27017/task';

// form validation
function validateField(course) {
    const schema = {
      name: Joi.string().min(3).required(),
      content: Joi.string().min(3).required(),
      tags: [Joi.string()],
      user: [Joi.string()],
    }

    return Joi.validate(course, schema)
  }

// data

router.get( '/', (req, res) => {
    res.json( { content: 'Hello API' } );
});


router.get('/task/', (req, res)=> {
    mongoose.connect(mongoUrl, (err, db) => {
        if(err) {
            res.status(404).send('nothing found')
        } else {
            db.collection('taskList').find().toArray((err, task) => {
                err ? res.status(404).send('nothing found') : res.json(task)
            });
        };
        db.close();
    });
});

router.get('/task/:id' , (req, res) => {
    mongoose.connect(mongoUrl, (err, db) => {
        if(err) {
            res.status(404).send('nothing found')
        } else {
            db.collection('taskList').find({ _id: ObjectId(req.params.id) }).toArray((err, task) => {
                // console.log('err', task)
                err ? res.status(404).send('nothing found') : res.json(task)
            });
            console.log('db', db.collection('taskList').find({ _id: req.params.id }))
        };
        db.close();
    });
})

router.get('/task/:id' , (req, res) => {
    mongoose.connect(mongoUrl, (err, db) => {
        if(err) {
            res.status(404).send('nothing found')
        } else {
            db.collection('taskList').find({ _id: ObjectId(req.params.id) }).toArray((err, task) => {
                // console.log('err', task)
                err ? res.status(404).send('nothing found') : res.json(task)
            });
        };
        db.close();
    });
})

router.post('/task', (req, res) => {

    const result = validateField(req.body)

    if(result.error) {
      //bad
      res.status(400).send(result.error.details[0].message)
      return;
    }

    db.collection('taskList').insert( { Name: req.body.name, content: req.body.content, tags: req.body.tags, user: req.body.user, data: req.body.data } )
})

router.delete('/task/:id', (req, res) => {
    mongoose.connect(mongoUrl, (err, db) => {
        if(err) {
            res.status(404).send('nothing found')
        } else {
            db.collection('taskList').find({ _id: ObjectId(req.params.id) }).toArray((err, task) => {
                // console.log('err', task)
                err ? res.status(404).send('nothing found') : db.inventory.deleteOne( { _id: ObjectId(req.params.id )} )
            });
        };
        db.close();
    });

    res.send(course)
  })

module.exports = router;