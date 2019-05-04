var express = require("express");
var router = express.Router();

var burgers = require("../models/burgers.js");


router.get("/", function (req, res) {
  console.log("controller ln 8", res);
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject, "controller, ln 13");
    res.render('index', hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burgers.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function (result) {
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id= " + req.params.id;

  burgers.update({
    devoured: true
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id= " + req.params.id;

  burgers.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;