const express = require('express');
const router = express.Router();
const client = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/csuapple"; // todo: please modify this in production

router.post('/submit', (req, res) => {
    client.connect(url, (err, db) => {
        if(!error) {
            db.collection('member').insertOne(req.body, (err, r) => {
                if(!err) {
                    res.send({
                        code: 200,
                        message: 'success'
                    });
                } else {
                    res.send({
                        code: 1,
                        message: 'error'
                    });
                }
            });
        } else {
             res.send({
                code: 1,
                message: 'error'
            });
        }
    });
});

module.exports = router;