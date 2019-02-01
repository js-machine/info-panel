import {WeatherModel} from "../model/weather.model";

export function toModel(dto: any): WeatherModel {

  const main = dto["main"];
  const sys = dto["sys"];
  const weather = dto["weather"][0];
  const wind = dto["wind"];

  const model = {
    main: {
      pressure: main["pressure"],
      humidity: main["humidity"],
    },
    sys: {
      sunrise: new Date(sys["sunrise"]),
      sunset: new Date(sys["sunset"])
    },
    weather: {
      icon: weather["icon"]
    },
    wind: {
      speed: wind["speed"],
      degree: wind["degree"]
    }
  };

  return model;
}

