"use strict";

const logger = require("../utils/logger");
const userStore = require("../models/user-store");
const accounts = require("./accounts.js");




const editUser = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const userid= userStore.getUser(loggedInUser.id);
    logger.debug(`Editing user ${userid}`);
    const viewData = {
      title: "Getting user",
      user: loggedInUser,
    
    };
    response.render("editUser", viewData);
  },

  update(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const userid= userStore.getUser(loggedInUser.id);
   const user=loggedInUser;
    logger.debug(`Editing user ${userid}`);
    const editedUser = {
      title: "updating user",
      firstName : request.body.firstName,
      lastName : request.body.lastName,
      email : request.body.email,
      password : request.body.password,
    };
    userStore.updateUser(user, editedUser);
    response.redirect("/login" );
  }
};

module.exports = editUser;

