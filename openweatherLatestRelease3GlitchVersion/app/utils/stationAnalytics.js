// "use strict";

// const stations = require("../models/stations");
// const stationSummary = require("../controllers/station");
// const _ = require("lodash");

// const stationAnalytics = {
//   getWeatherCode(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let weatherCode = stations.getLastReading(station).code;
//         switch (weatherCode) {
//           case "100":
//             return "clear";
//           case "200":
//             return "Partial Clouds";
//           case "300":
//             return "Cloudy";
//           case "400":
//             return "Light Showers";
//           case "500":
//             return "Heavy Showers";
//           case "600":
//             return "Rain";
//           case "700":
//             return "Snow";
//           case "800":
//             return "Thunder";
//             break;
//         }
//       }
//     }
//   },
//   getWeatherIcon(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let weatherCode = stations.getLastReading(station).code;
//         switch (weatherCode) {
//           case "100":
//             return "right floated huge red sun icon";
//           case "200":
//             return "right floated huge red cloud sun icon";
//           case "300":
//             return "right floated huge red cloud sun icon";
//           case "400":
//             return "right floated huge red cloud sun rain icon";
//           case "500":
//             return "right floated huge red cloud showers heavy icon";
//           case "600":
//             return "right floated huge red cloud rain icon";
//           case "700":
//             return "right floated huge red snowflake icon";
//           case "800":
//             return "right floated huge red bolt icon";
//             break;
//         }
//      }
//     }
//   },

//   getMinTemperature(station) {
//     let minTemperature = null;
//     if (station) {
//       if (station.readings.length > 0) {
//         minTemperature = Number(station.readings[0].temperature);
//         for (let i = 0; i < station.readings.length; i++) {
//           if (Number(station.readings[i].temperature) < minTemperature) {
//             minTemperature = Number(station.readings[i].temperature);
//           }
//         }
//       }
//     }
//     return minTemperature;
//   },
//   getMaxTemperature(station) {
//     let maxTemperature = null;
//     if (station) {
//       if (station.readings.length > 0) {
//         maxTemperature = Number(station.readings[0].temperature);
//         for (let i = 0; i < station.readings.length; i++) {
//           if (Number(station.readings[i].temperature) > maxTemperature) {
//             maxTemperature = Number(station.readings[i].temperature);
//           }
//         }
//       }
//     }
//     return maxTemperature;
//   },
//   celsiusToFarenheit(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let degreeCelsius = stations.getLastReading(station).temperature;
//         let degreeToFarenheit = (degreeCelsius * 9) / 5 + 32;
//         return degreeToFarenheit;
//       }
//     }
//   },

//   getTemperatureTrend(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let lastTemperature = stations.getLastReading(station).temperature;
//         let secondLastTemperature = stations.getSecondLastReading(station)
//           .temperature;
//         if (lastTemperature > secondLastTemperature) {
//           return "huge arrow up  icon";
//         }
//         if (lastTemperature < secondLastTemperature) {
//           return "huge arrow down  icon";
//         }
//         if (lastTemperature == secondLastTemperature) {
//           return "large red arrow horizontal icon";
//         }
//       }
//     }
//   },

//   getMinPressure(station) {
//     let minPressure = null;
//     if (station) {
//       if (station.readings.length > 0) {
//         minPressure = station.readings[0];
//         for (let i = 0; i < station.readings.length; i++) {
//           if (station.readings[i].pressure < minPressure.pressure) {
//             minPressure = station.readings[i];
//           }
//         }
//       }
//     }
//     return minPressure;
//   },
//   getMaxPressure(station) {
//     let maxPressure = null;
//     if (station) {
//       if (station.readings.length > 0) {
//         maxPressure = station.readings[0];
//         for (let i = 0; i < station.readings.length; i++) {
//           if (station.readings[i].pressure >= maxPressure.pressure) {
//             maxPressure = station.readings[i];
//           }
//         }
//       }
//     }
//     return maxPressure;
//   },
//   getPressureTrend(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let lastPressure = stations.getLastReading(station).pressure;
//         let secondLastPressure = stations.getSecondLastReading(station)
//           .pressure;
//         if (lastPressure > secondLastPressure) {
//           return "huge arrow up  icon";
//         }
//         if (lastPressure < secondLastPressure) {
//           return "huge arrow down  icon";
//         }
//         if (lastPressure == secondLastPressure) {
//           return "large red arrow horizontal icon";
//         }
//       }
//     }
//   },

//   getMinWindSpeed(station) {
//     let minWindSpeed = null;
//     if (station) {
//       if (station.readings.length > 0) {
//         minWindSpeed = station.readings[0].windSpeed;
//         for (let i = 0; i < station.readings.length; i++) {
//           if (station.readings[i].windSpeed < minWindSpeed) {
//             minWindSpeed = station.readings[i].windSpeed;
//           }
//         }
//       }
//       return minWindSpeed;

//     }
//   },
//   getMaxWindSpeed(station) {
//     let maxWindSpeed = null;
//     if (station) {
//       if (station.readings.length > 0) {
//         maxWindSpeed = station.readings[0];
//         for (let i = 0; i < station.readings.length; i++) {
//           if (station.readings[i].windSpeed> maxWindSpeed.windSpeed) {
//             maxWindSpeed = station.readings[i];
//           }
//         }
//       }
//       return maxWindSpeed;

//     }
//   },

//   getBeaufortScale(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let windSpeed = stations.getLastReading(station).windSpeed;
//         if (windSpeed < 1) {
//           return 0;
//         } else if (windSpeed > 1 && windSpeed <= 5) {
//           return 1;
//         } else if (windSpeed >= 6 && windSpeed <= 11) {
//           return 2;
//         } else if (windSpeed >= 12 && windSpeed <= 19) {
//           return 3;
//         } else if (windSpeed >= 20 && windSpeed <= 28) {
//           return 4;
//         } else if (windSpeed >= 29 && windSpeed <= 38) {
//           return 5;
//         } else if (windSpeed >= 39 && windSpeed <= 49) {
//           return 6;
//         } else if (windSpeed >= 50 && windSpeed <= 61) {
//           return 7;
//         } else if (windSpeed >= 62 && windSpeed <= 74) {
//           return 8;
//         } else if (windSpeed >= 75 && windSpeed <= 88) {
//           return 9;
//         } else if (windSpeed >= 89 && windSpeed <= 102) {
//           return 10;
//         } else if (windSpeed >= 103 && windSpeed <= 200) {
//           return 11;
//         } else {
//           return "Enter realistic reading";
//           // alert('A Wind Chill value cannot be calculated for wind speeds greater than 200 and below 0 kilometers/hour')
//         }
//       }
//     }
//   },

//   getWindType(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let windSpeed = stations.getLastReading(station).windSpeed;
//         if (windSpeed < 1) {
//           return "Calm";
//         } else if (windSpeed > 1 && windSpeed <= 5) {
//           return "Light Air";
//         } else if (windSpeed >= 6 && windSpeed <= 11) {
//           return "Light Breeze";
//         } else if (windSpeed >= 12 && windSpeed <= 19) {
//           return "Gentle Breeze";
//         } else if (windSpeed >= 20 && windSpeed <= 28) {
//           return "Moderate Breeze";
//         } else if (windSpeed >= 29 && windSpeed <= 38) {
//           return "Fresh Breeze";
//         } else if (windSpeed >= 39 && windSpeed <= 49) {
//           return "Strong Breeze";
//         } else if (windSpeed >= 50 && windSpeed <= 61) {
//           return "Near Gale";
//         } else if (windSpeed >= 62 && windSpeed <= 74) {
//           return "Gale";
//         } else if (windSpeed >= 75 && windSpeed <= 88) {
//           return "Severe Gale";
//         } else if (windSpeed >= 89 && windSpeed <= 102) {
//           return "Strong Storm";
//         } else if (windSpeed >= 103 && windSpeed <= 200) {
//           return "Viloent storm";
//         } else {
//           return "Invalid input";
//           // alert('A Wind Chill value cannot be calculated for wind speeds greater than 200 and below 0 kilometers/hour')
//         }
//       }
//     }
//   },

//   getWindChill(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let windSpeed = stations.getLastReading(station).windSpeed;
//         let temperature = stations.getLastReading(station).temperature;
//         let windChill =
//           Math.round(
//             10 *
//               (13.12 +
//                 0.6215 * temperature -
//                 11.37 * Math.pow(windSpeed, 0.16) +
//                 0.3965 * temperature * Math.pow(windSpeed, 0.16))
//           ) / 10;
//         return windChill;
//       }
//     }
//   },

//   getWindDirection(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let windDirection = stations.getLastReading(station).windDirection;

//         if (windDirection > 348.75 && windDirection <= 11.25) {
//           return "North";
//         } else if (windDirection > 11.25 && windDirection <= 33.75) {
//           return "North-NorthEast";
//         } else if (windDirection > 33.75 && windDirection <= 56.25) {
//           return "North East";
//         } else if (windDirection > 56.25 && windDirection <= 78.75) {
//           return "East-NorthEast";
//         } else if (windDirection > 78.75 && windDirection <= 101.25) {
//           return "East";
//         } else if (windDirection > 101.25 && windDirection <= 123.75) {
//           return "East-SouthEast";
//         } else if (windDirection > 123.75 && windDirection <= 146.25) {
//           return "SouthEast";
//         } else if (windDirection > 146.25 && windDirection <= 168.75) {
//           return "South-SouthEast";
//         } else if (windDirection > 168.75 && windDirection <= 191.25) {
//           return "South";
//         } else if (windDirection > 191.25 && windDirection <= 213.75) {
//           return "South-SouthWest";
//         } else if (windDirection > 213.75 && windDirection <= 236.25) {
//           return "SouthWest";
//         } else if (windDirection > 236.25 && windDirection <= 258.75) {
//           return "West-SouthWest";
//         } else if (windDirection > 258.75 && windDirection <= 281.25) {
//           return "West";
//         } else if (windDirection > 281.25 && windDirection <= 303.75) {
//           return "West-NorthWest";
//         } else if (windDirection > 303.75 && windDirection <= 326.25) {
//           return "NorthWest";
//         } else if (windDirection > 326.25 && windDirection <= 348.75) {
//           return "North-NorthWest";
//         } else {
//           return "Enter windDegree between 11.25 and 348.75";
//         }
//       }
//     }
//   },
//   getWindSpeedTrend(station) {
//     if (station) {
//       if (station.readings.length > 0) {
//         let lastWindSpeed = stations.getLastReading(station).windSpeed;
//         let secondLastWindSpeed = stations.getSecondLastReading(station)
//           .windSpeed;
//         if (lastWindSpeed > secondLastWindSpeed) {
//           return "huge arrow up  icon";
//         }
//         if (lastWindSpeed < secondLastWindSpeed) {
//           return "huge arrow down  icon";
//         }
//         if (lastWindSpeed == secondLastWindSpeed) {
//           return "large red arrow horizontal icon";
//         }
//       }
//     }
//   }
// };

// module.exports = stationAnalytics;

// // Wind chill = 13.12 + 0.6215T – 11.37 (V^0.16) + 0.3965T (V^0.16) in km/hr

// // Wind chill = 35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16)  in mph

// // 				wChill = 35.74 + .6215*F - 35.75*Math.pow(mph, 0.16) + 0.4275*F*Math.pow(mph, 0.16);
// // 				return wChill;
// // value = Math.round(10*value)/10;
// // return value;
"use strict";

const stations = require("../models/stations");
const stationSummary = require("../controllers/station");
const _ = require("lodash");
const { trimEnd } = require("lodash");

const stationAnalytics = {
  getWeatherCode(station) {
    if (station) {
      if (station.readings.length > 0) {
        let weatherCode = stations.getLastReading(station).code;
        switch (weatherCode) {
          case "100":
            return "clear";
          case "200":
            return "Partial Clouds";
          case "300":
            return "Cloudy";
          case "400":
            return "Light Showers";
          case "500":
            return "Heavy Showers";
          case "600":
            return "Rain";
          case "700":
            return "Snow";
          case "800":
            return "Thunder";
            break;
        }
      }
    }
  },
  getWeatherIcon(station) {
    if (station) {
      if (station.readings.length > 0) {
        let weatherCode = stations.getLastReading(station).code;
        switch (weatherCode) {
          case "100":
            return "right floated huge red sun icon";
          case "200":
            return "right floated huge red cloud sun icon";
          case "300":
            return "right floated huge red cloud sun icon";
          case "400":
            return "right floated huge red cloud sun rain icon";
          case "500":
            return "right floated huge red cloud showers heavy icon";
          case "600":
            return "right floated huge red cloud rain icon";
          case "700":
            return "right floated huge red snowflake icon";
          case "800":
            return "right floated huge red bolt icon";
            break;
        }
     }
    }
  },

  getMinTemperature(station) {
    let minTemperature = null;
    if (station) {
      if (station.readings.length > 0) {
        minTemperature = Number(station.readings[0].temperature);
        for (let i = 0; i < station.readings.length; i++) {
          if (Number(station.readings[i].temperature) < minTemperature) {
            minTemperature = Number(station.readings[i].temperature);
          }
        }
      }
    }
    return minTemperature;
  },
  getMaxTemperature(station) {
    let maxTemperature = null;
    if (station) {
      if (station.readings.length > 0) {
        maxTemperature = Number(station.readings[0].temperature);
        for (let i = 0; i < station.readings.length; i++) {
          if (Number(station.readings[i].temperature) > maxTemperature) {
            maxTemperature = Number(station.readings[i].temperature);
          }
        }
      }
    }
    return maxTemperature;
  },
  celsiusToFarenheit(station) {
    if (station) {
      if (station.readings.length > 0) {
        let degreeCelsius = stations.getLastReading(station).temperature;
        let degreeToFarenheit = (degreeCelsius * 9) / 5 + 32;
        return degreeToFarenheit;
      }
    }
  },

  getTemperatureTrend(station) {
    if (station) {
      if (station.readings.length > 0) {
        let lastTemperature = Number(stations.getLastReading(station).temperature);
        let secondLastTemperature = Number(stations.getSecondLastReading(station)
          .temperature);
        if (lastTemperature > secondLastTemperature) {
          return "huge arrow up  icon";
        }
        if (lastTemperature < secondLastTemperature) {
          return "huge arrow down  icon";
        }
        if (lastTemperature === secondLastTemperature) {
          return "large red arrow horizontal icon";
        }
      }
    }
  },

  getMinPressure(station) {
    let minPressure = null;
    if (station) {
      if (station.readings.length > 0) {
        minPressure = Number(station.readings[0].pressure);
        for (let i = 0; i < station.readings.length; i++) {
          if (Number(station.readings[i].pressure) < minPressure) {
            minPressure = Number(station.readings[i].pressure);
          }
        }
      }
    }
    return minPressure;
  },
  getMaxPressure(station) {
    let maxPressure = null;
    if (station) {
      if (station.readings.length > 0) {
        maxPressure = Number(station.readings[0].pressure);
        for (let i = 0; i < station.readings.length; i++) {
          if (Number(station.readings[i].pressure) > maxPressure) {
            maxPressure = Number(station.readings[i].pressure);
          }
        }
      }
    }
    return maxPressure;
  },
  getPressureTrend(station) {
    if (station) {
      if (station.readings.length > 0) {
        let lastPressure = Number(stations.getLastReading(station).pressure);
        let secondLastPressure = Number(stations.getSecondLastReading(station)
          .pressure);
        if (lastPressure > secondLastPressure) {
          return "huge arrow up  icon";
        }
        if (lastPressure < secondLastPressure) {
          return "huge arrow down  icon";
        }
        if (lastPressure == secondLastPressure) {
          return "large red arrow horizontal icon";
        }
      }
    }
  },

  getMinWindSpeed(station) {
    let minWindSpeed = null;
    if (station) {
      if (station.readings.length > 0) {
        minWindSpeed = Number(station.readings[0].windSpeed);
        for (let i = 0; i < station.readings.length; i++) {
          if (Number(station.readings[i].pressure) < minWindSpeed) {
            minWindSpeed = Number(station.readings[i].windSpeed);
          }
        }
      }
      return minWindSpeed;

    }
  },
  getMaxWindSpeed(station) {
    let maxWindSpeed = null;
    if (station) {
      if (station.readings.length > 0) {
        maxWindSpeed = Number(station.readings[0].windSpeed);
        for (let i = 0; i < station.readings.length; i++) {
          if (Number(station.readings[i].windSpeed) > maxWindSpeed) {
            maxWindSpeed = Number(station.readings[i].windSpeed);
          }
        }
      }
      return maxWindSpeed;

    }
  },

  getBeaufortScale(station) {
    if (station) {
      if (station.readings.length > 0) {
        let windSpeed = stations.getLastReading(station).windSpeed;
        if (windSpeed < 1) {
          return 0;
        } else if (windSpeed > 1 && windSpeed <= 5) {
          return 1;
        } else if (windSpeed >= 6 && windSpeed <= 11) {
          return 2;
        } else if (windSpeed >= 12 && windSpeed <= 19) {
          return 3;
        } else if (windSpeed >= 20 && windSpeed <= 28) {
          return 4;
        } else if (windSpeed >= 29 && windSpeed <= 38) {
          return 5;
        } else if (windSpeed >= 39 && windSpeed <= 49) {
          return 6;
        } else if (windSpeed >= 50 && windSpeed <= 61) {
          return 7;
        } else if (windSpeed >= 62 && windSpeed <= 74) {
          return 8;
        } else if (windSpeed >= 75 && windSpeed <= 88) {
          return 9;
        } else if (windSpeed >= 89 && windSpeed <= 102) {
          return 10;
        } else if (windSpeed >= 103 && windSpeed <= 200) {
          return 11;
        } else {
          return "Enter realistic reading";
          // alert('A Wind Chill value cannot be calculated for wind speeds greater than 200 and below 0 kilometers/hour')
        }
      }
    }
  },

  getWindType(station) {
    if (station) {
      if (station.readings.length > 0) {
        let windSpeed = stations.getLastReading(station).windSpeed;
        if (windSpeed < 1) {
          return "Calm";
        } else if (windSpeed > 1 && windSpeed <= 5) {
          return "Light Air";
        } else if (windSpeed >= 6 && windSpeed <= 11) {
          return "Light Breeze";
        } else if (windSpeed >= 12 && windSpeed <= 19) {
          return "Gentle Breeze";
        } else if (windSpeed >= 20 && windSpeed <= 28) {
          return "Moderate Breeze";
        } else if (windSpeed >= 29 && windSpeed <= 38) {
          return "Fresh Breeze";
        } else if (windSpeed >= 39 && windSpeed <= 49) {
          return "Strong Breeze";
        } else if (windSpeed >= 50 && windSpeed <= 61) {
          return "Near Gale";
        } else if (windSpeed >= 62 && windSpeed <= 74) {
          return "Gale";
        } else if (windSpeed >= 75 && windSpeed <= 88) {
          return "Severe Gale";
        } else if (windSpeed >= 89 && windSpeed <= 102) {
          return "Strong Storm";
        } else if (windSpeed >= 103 && windSpeed <= 200) {
          return "Viloent storm";
        } else {
          return "Invalid input";
          // alert('A Wind Chill value cannot be calculated for wind speeds greater than 200 and below 0 kilometers/hour')
        }
      }
    }
  },

  getWindChill(station) {
    if (station) {
      if (station.readings.length > 0) {
        let windSpeed = stations.getLastReading(station).windSpeed;
        let temperature = stations.getLastReading(station).temperature;
        let windChill =
          Math.round(
            10 *
              (13.12 +
                0.6215 * temperature -
                11.37 * Math.pow(windSpeed, 0.16) +
                0.3965 * temperature * Math.pow(windSpeed, 0.16))
          ) / 10;
        return windChill;
      }
    }
  },

  getWindDirection(station) {
    if (station) {
      if (station.readings.length > 0) {
        let windDirection = stations.getLastReading(station).windDirection;

        if (windDirection > 348.75 && windDirection <= 11.25) {
          return "North";
        } else if (windDirection > 11.25 && windDirection <= 33.75) {
          return "North-NorthEast";
        } else if (windDirection > 33.75 && windDirection <= 56.25) {
          return "North East";
        } else if (windDirection > 56.25 && windDirection <= 78.75) {
          return "East-NorthEast";
        } else if (windDirection > 78.75 && windDirection <= 101.25) {
          return "East";
        } else if (windDirection > 101.25 && windDirection <= 123.75) {
          return "East-SouthEast";
        } else if (windDirection > 123.75 && windDirection <= 146.25) {
          return "SouthEast";
        } else if (windDirection > 146.25 && windDirection <= 168.75) {
          return "South-SouthEast";
        } else if (windDirection > 168.75 && windDirection <= 191.25) {
          return "South";
        } else if (windDirection > 191.25 && windDirection <= 213.75) {
          return "South-SouthWest";
        } else if (windDirection > 213.75 && windDirection <= 236.25) {
          return "SouthWest";
        } else if (windDirection > 236.25 && windDirection <= 258.75) {
          return "West-SouthWest";
        } else if (windDirection > 258.75 && windDirection <= 281.25) {
          return "West";
        } else if (windDirection > 281.25 && windDirection <= 303.75) {
          return "West-NorthWest";
        } else if (windDirection > 303.75 && windDirection <= 326.25) {
          return "NorthWest";
        } else if (windDirection > 326.25 && windDirection <= 348.75) {
          return "North-NorthWest";
        } else {
          return "Enter windDegree between 11.25 and 348.75";
        }
      }
    }
  },
  getWindSpeedTrend(station) {
    if (station) {
      if (station.readings.length > 0) {
        let lastWindSpeed = Number(stations.getLastReading(station).windSpeed);
        let secondLastWindSpeed = Number(stations.getSecondLastReading(station)
          .windSpeed);
        if (lastWindSpeed > secondLastWindSpeed) {
          return "huge arrow up  icon";
        }
        if (lastWindSpeed < secondLastWindSpeed) {
          return "huge arrow down  icon";
        }
        if (lastWindSpeed == secondLastWindSpeed) {
          return "large red arrow horizontal icon";
        }
      }
    }
  }
};

module.exports = stationAnalytics;

// Wind chill = 13.12 + 0.6215T – 11.37 (V^0.16) + 0.3965T (V^0.16) in km/hr

// Wind chill = 35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16)  in mph

// 				wChill = 35.74 + .6215*F - 35.75*Math.pow(mph, 0.16) + 0.4275*F*Math.pow(mph, 0.16);
// 				return wChill;
// value = Math.round(10*value)/10;
// return value;

