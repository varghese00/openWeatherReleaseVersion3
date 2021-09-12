

"use strict";

const logger = require("../utils/logger");
const stations = require("../models/stations");
const uuid = require("uuid");
const accounts = require("./accounts.js");
const stationAnalytics = require("../utils/stationAnalytics");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const userStations = stations.getUserStations(loggedInUser.id);

    userStations.forEach(obj =>{
     // console.log(stations.getLastReading(obj))
      obj.lastStationReading=stations.getLastReading(obj);
      obj.lastStationWeatherIcon=stationAnalytics.getWeatherIcon(obj);
      obj.lastStationTemperatureTrend=stationAnalytics.getTemperatureTrend(obj);
      obj.lastStationPressureTrend=stationAnalytics.getPressureTrend(obj);
      obj.lastStationWindTrend=stationAnalytics.getWindSpeedTrend(obj);


    }
    );

    const viewData = {
      title: "station Dashboard",
      stations: userStations,
     /* dashBoardSummary: {
        lastStationReading: lastReading,
      }*/
    };


    response.render("dashboard", viewData);
  },
  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug("Deleting station ${stationId}");
    stations.removeStation(stationId);
    response.redirect("/dashboard");
  },

  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      name: request.body.name,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      readings: []
    };
    logger.debug("Creating a new station", newStation);
    stations.addStation(newStation);
    response.redirect("/dashboard");
  }
};

module.exports = dashboard;
