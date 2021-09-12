"use strict";

const _ = require("lodash"); //library to delete an element from an array.
/*Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:Iterating arrays, objects, & stringsManipulating & testing valuesCreating composite functions*/

const JsonStore = require("./json-store");

const stations = {
  store: new JsonStore("./models/stations.json", {
    stationCollection: []
  }),
  collection: "stationCollection",

  getAllStations() {
    return this.store.findAll(this.collection);
  },

  getStation(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getUserStations(userid) {

    return this.store.findBy(this.collection, { userid: userid });
  },

  addStation(station) {
    this.store.add(this.collection, station);
    this.store.save();
  },

  removeStation(id) {
    const station = this.getStation(id);
    this.store.remove(this.collection, station);
    this.store.save();
  },

  removeAllStations() {
    this.store.removeAll(this.collection);
    this.store.save();
  },
  getStationLastReading(stations,station) {
    let stationsLastReading = null;
    if (stations) {
      if(station.readings[station.readings.length > 0]){
      for(let i=0; i<stations[i].readings.length;i++){
        stationsLastReading=stations[i].readings[stations[i].readings.length-1];
       }
      }
    }
    return stationsLastReading;

  },

  addReading(id, newReading) {
    const station = this.getStation(id);
    station.readings.push(newReading);
    this.store.save();
  },

  removeReading(id, readingId) {
    const station = this.getStation(id);
    const readings = station.readings;
    _.remove(readings, { id: readingId }); // part of lodash feature. lodash goes through all the ids in this station collection and return the id

    // TODO : remove the reading with id readingId from the station
    this.store.save();
  },

  getReading(id, readingId) {
    const station = this.store.findOneBy(this.collection, { id: id });
    const readings = station.readings.filter(
      reading => reading.id == readingId
    );
    return readings[0];
  },

  getLastReading(station) {
    let lastReading = null;
    if (station) {
      if (station.readings.length > 0) {
        lastReading = station.readings[station.readings.length - 1];
      }
      return lastReading;
    }

  },

  getSecondLastReading(station) {
    let secondLastReading = null;
    if (station) {
      if (station.readings.length > 0) {
        if (station.readings.length === 1) {
          secondLastReading = station.readings[station.readings.length - 1];
        } else {
          secondLastReading = station.readings[station.readings.length - 2];
        }
      }
    }
    return secondLastReading;
  },

  updateReading(reading, editedReading) {
    reading.code = editedReading.code;
    reading.temperature = editedReading.temperature;
    reading.windSpeed = editedReading.windSpeed;
    reading.windDirection = editedReading.windDirection;
    reading.pressure = editedReading.pressure;
    this.store.save();
  }
};

module.exports = stations;
