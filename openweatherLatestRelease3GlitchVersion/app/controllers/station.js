"use strict";

const logger = require("../utils/logger");
const stationAnalytics = require("../utils/stationAnalytics");
const stations = require("../models/stations");
const uuid = require("uuid");
const moment = require("moment");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    const currentStation = stations.getStation(stationId);
    const viewData = {
      name: "Station",
      station: currentStation,
      stationSummary: {
        lastReading: stations.getLastReading(currentStation),
        secondlastReading: stations.getSecondLastReading(currentStation),
        weatherCondition: stationAnalytics.getWeatherCode(currentStation),
        weatherIcon: stationAnalytics.getWeatherIcon(currentStation),
        minTemperature: stationAnalytics.getMinTemperature(currentStation),
        maxTemperature: stationAnalytics.getMaxTemperature(currentStation),
        temperatureTrend: stationAnalytics.getTemperatureTrend(currentStation),
        celsiusToFarenheit: stationAnalytics.celsiusToFarenheit(currentStation),
        minPressure: stationAnalytics.getMinPressure(currentStation),
        maxPressure: stationAnalytics.getMaxPressure(currentStation),
        pressureTrend: stationAnalytics.getPressureTrend(currentStation),
        minWindSpeed: stationAnalytics.getMinWindSpeed(currentStation),
        maxWindSpeed: stationAnalytics.getMaxWindSpeed(currentStation),
        beaufort: stationAnalytics.getBeaufortScale(currentStation),
        windChill: stationAnalytics.getWindChill(currentStation),
        windDirection: stationAnalytics.getWindDirection(currentStation),
        windSpeedTrend: stationAnalytics.getWindSpeedTrend(currentStation),
        windType:stationAnalytics.getWindType(currentStation),
      }
      
    };
    response.render("station", viewData);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingId;
    logger.debug(`Deleting Reading ${readingId} from station ${stationId}`);
    stations.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },

  addReading(request, response) {
    const stationId = request.params.id;
    const station = stations.getStation(stationId);

    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
      time: moment().format("LLLL")
      // station:station, do not put this back it will cause json circular stringify
      //readings: request.body,
    };
    logger.debug("New Reading = ", newReading);
    stations.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = station;
