'use strict';

const express = require('express');
const router = express.Router();

const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const station = require('./controllers/station.js');
const accounts = require('./controllers/accounts.js');
const reading = require("./controllers/reading.js");
const { npm } = require('winston/lib/winston/config');
const editUser = require('./controllers/editUser.js');

router.get("/", accounts.index);
router.get("/login", accounts.login);
router.get("/signup", accounts.signup);
router.get("/logout", accounts.logout);
router.post("/register", accounts.register);
router.post("/authenticate", accounts.authenticate);
router.get("/editUser/", editUser.index);
router.post("/editUser/:userid", editUser.update);



router.get("/dashboard", dashboard.index);
router.get("/dashboard/deleteStation/:id", dashboard.deleteStation);
router.post("/dashboard/addStation", dashboard.addStation);

router.get("/about", about.index);
router.get("/station/:id", station.index);
router.get("/station/:id/deleteReading/:readingId", station.deleteReading);
router.post("/station/:id/addReading", station.addReading);
router.get("/reading/:id/editReading/:readingId", reading.index);
router.post("/station/:id/updateReading/:readingId", reading.update);


module.exports = router;

