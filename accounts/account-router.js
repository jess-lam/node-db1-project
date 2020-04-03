const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get('/', (req, res) => {
    db.select("*")
    .from("accounts")
    .then(rows => {
        res.status(200).json({data: rows});
    })
    .catch(err => {
        res.status(500).json({message: "Sorry, ran into an error."})
    });
});
//works on Postman

router.get('/:id', (req, res) => {
    db("accounts")
    .where({id: req.params.id})
    .first()
    .then(account => {
        if (account) {
            res.status(200).json({data: account})
        } else {
            res.status(404).json({message: "Account cannot be found."})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Sorry, ran into an error."})
    })
})
    
//works on Postman

module.exports = router;