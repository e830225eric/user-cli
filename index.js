const mongoose = require("mongoose");
// const assert = require("assert");

mongoose.Promise = global.Promise;

// Connect to database
const db = mongoose.connect("mongodb://localhost:27017/userDB");

// Create Sechema
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    phone: String,
    email: String,
    message: String
});

//Define model for mongoDB
const User = mongoose.model("User", userSchema);

//Add User
function addUser(info) {
  User.create(info, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("User Added Sucessfully");
      mongoose.connection.close();
    }
  })
}


//Find User
function findUser(user) {
  User.find({name: user.name}, function(err, user){
    if (err) {
      console.log(err);
    } else {
      console.log(user);
      mongoose.connection.close();
    }
  })
}

// Delete User
function deleteUser(user) {
  User.deleteOne({name: user.name}, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Delete Successfully!");
      mongoose.connection.close();
    }
  })
}

// Update user
function updateUser(info) {
  console.log(info);

  User.updateOne({name: info.name},
    {$set: {
      phone: info.phone,
      email: info.email,
      message: info.message
  }},
  function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Update Successfully!");
      mongoose.connection.close()
    }
  })
}

//List user
function listUser(){
  User.find({},function(err, user){
    if (err) {
      console.log(err);
    } else{
      console.log(user);
      mongoose.connection.close();
    }
  })
}


//Export Methods
module.exports = {
  addUser,
  findUser,
  deleteUser,
  updateUser,
  listUser
};
