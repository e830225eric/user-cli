#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const {
  addUser,
  findUser,
  deleteUser,
  updateUser,
  listUser
} = require("./index");


// Question for user info
const questions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your name: "
  },
  {
    type: "input",
    name: "phone",
    message: "Please enter your phone: "
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: "
  },
  {
    type: "input",
    name: "message",
    message: "Comments: "
  }
];

//Question for search, update, and deleteOne

const questionsOne = [
  {
    type: "input",
    name: "name",
    message: "Please enter your name: "
  }
];

const questionsUpdate = [
  {
    type: "input",
    name: "option",
    message:
    "What info are you going to update:\n"
    + "1. phone number\n"
    + "2. email\n"
    + "3. comments\n"
    + "Please enter number:"
  }
];

program
  .version("1.0.0")
  .description("Contact management system")

program
  .command("add")
  .alias("a")
  .description("Add an user contact info")
  .action(() => {
    prompt(questions).then(answer => addUser(answer))
  });

program
  .command("find")
  .alias("f")
  .description("Find a user")
  .action(() => {
    prompt(questionsOne).then(answer => findUser(answer))
  })

program
  .command("delete")
  .alias("d")
  .description("Delete a user info")
  .action(() => {
    prompt(questionsOne).then(answer => deleteUser(answer))
})

program
  .command("update")
  .alias("u")
  .description("Update user info")
  .action(() => {
    prompt(questions).then(answer => updateUser(answer))
  })

program
  .command("list")
  .alias("l")
  .description("List all users")
  .action(() => listUser());


program.parse(process.argv);
