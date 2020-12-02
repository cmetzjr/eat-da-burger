var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")



// get all burgers, render index.html (via hbrs) with uneaten (devoured=false) on the left
router.get("/", (req, res) => {
    burger.all((data) => {
        res.render("index", {burgers: data});
    });
});

// create a new burger. name in req.body, devoured status is false (per burger.js)
router.post("/burger/create", (req, res) => {
    // console.log(req.body)
    burger.create(req.body.burger_name, (result) => {
        // console.log(result);
        res.redirect("/");
    });
});

// update the ID in the database
router.put("/burger/:id", function(req, res) {
    // console.log(req.params)
  burger.update(req.params.id, function(result) {
    // console.log(result);    
    res.sendStatus(200);
  });
});

module.exports = router;