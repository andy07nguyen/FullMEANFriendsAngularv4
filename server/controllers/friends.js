console.log("Friends controller");
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
  index: function(req, res){
    Friend.find({}, function(badStuff, goodStuff){
      if(badStuff){
        res.json({message: "Error", error: badStuff})
      }
      else{
        res.json({message: "Success", friends: goodStuff})
      }
    })
    
  },
  create: function(req, res){
    
    Friend.create(req.body, function(err, output){
      if (err) {
        res.json({message: "Error", error: err})
      }
      else {
        res.json({message: "Success", friend: output})
      }
    })
  },
  update: function(req, res){
    Friend.update({ _id: req.body._id }, req.body, function (err,output) {
      if (err) {
        res.json({message: "Error", error:err})
      }
      else {
        res.json({message: "Success", friend:output})
      }
    });
  },
  delete: function(req, res){
    Friend.remove({_id: req.params.id})
    .then((data)=>{
      res.json({message: "Success"})
    })
    .catch((err)=>{
      res.json({message: "Error", error: err})
    })
  },
  show: function(req, res){
    Friend.findOne({_id: req.params.id})
    .then((friend)=>{
      res.json({message: "Success", friend: friend})
    })
    .catch((err)=>{
      res.json({message: "Error", error: err})
    })
  }
}
