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
router.post("/api/create", (req, res) => {
    console.log(req.body)
    // burger.create(req.body.newburger, (result) => {
    //     console.log(result);
    //     // Send back the ID of the new burger
    //     res.json({ id: result.insertId });
    // res.redirect("/");
    // });
});



module.exports = router;