var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")
var connection = require("../config/connection.js");


// get all burgers, render index.html (via hbrs) with uneaten (devoured=false) on the left
router.get("/", (req, res) => {
    burger.all((data) => {
        res.render("index", {burgers: data});
    });
});

// create a new burger. name in req.body, devoured status is false (per burger.js)
router.post("/create", (req, res) => {
    console.log(req.body.burger_name)
    // burgers.create(req.body.burger_name, (result) => {
    //     console.log(result);
    //     // res.json({ id: result.insertId });
    // res.redirect("/");
    // });
});

// change the devoured status of a burger (user clicked the "eat" button)
// router.put("/api/plans/:id", function(req, res) {
//   connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });

// // Delete a plan
// router.delete("/api/plans/:id", function(req, res) {
//   connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });

module.exports = router;