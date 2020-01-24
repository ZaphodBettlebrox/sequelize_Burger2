var express = require("express");
var router = express.Router();
// var burger = require("../models/burger.js");
var db = require("../models")
router.get("/", function(req, res) {
  db.burger.findAll({raw:true}).then(function(data) {
    console.log(data);
    
    var result = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", result);
  });

});

router.post("/api/burgers", function(req, res) {

  db.burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function (result) {
    res.json(result.toJSON()); 
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.burger.update(
    {devoured: req.body.devoured},
    {where :{id: req.params.id}
    }
    ).then(function(result){
      res.status(200).end();
    }).catch(function(err){
      res.status(404).end()
    });
});

router.delete("/api/burgers/:id", function(req, res) {

  db.burger.destroy({
    where:{
      id: req.params.id
    }
  }).then(function(result){
    res.status(200).end();
  }).catch(function(err){
    res.status(404).end()
  })
});

module.exports = router;
