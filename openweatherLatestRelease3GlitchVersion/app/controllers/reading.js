"use strict";

const logger = require("../utils/logger");
const stations = require("../models/stations");



const reading = {
  index(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingId;
    logger.debug(`Editing reading ${readingId} from Station ${stationId}`);
    const viewData = {
      title: "Edit reading",
      station: stations.getStation(stationId),
      reading: stations.getReading(stationId, readingId)
    };
    response.render("reading", viewData);
  },

  update(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingId;
    const reading = stations.getReading(stationId, readingId)
    const editedReading = {
      title: "update reading",
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
    };
    logger.debug(`Updating reading ${readingId} from Station ${stationId}`);
    stations.updateReading(reading, editedReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = reading;

