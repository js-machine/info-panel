import {WeatherModel} from "../model/weather.model";

export function weatherDtoToModel(dto: any): WeatherModel {

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

export function forecastDtoToModel(dto: any): WeatherModel {
  const list = dto["list"];
  const models = list.map((item) => {
    const temp = item["temp"];
    const weather = item["weather"];

    return {
      date: new Date(item["dt"]),
      temperature: {
        day: temp["day"],
        night: temp["night"]
      },
      weather: {
        icon: weather["icon"]
      }
    }
  });

  return models;
}
