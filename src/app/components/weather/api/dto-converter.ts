import { WeatherModel } from '../model/weather.model';
import { ForecastModel } from '../model/forecast.model';



export function weatherDtoToModel(dto: any): WeatherModel {
  const main = dto['main'];
  const sys = dto['sys'];
  const weather = dto['weather'][0];
  const wind = dto['wind'];
  const pressureHPAtoMMHGcoef = 0.75;

  const model = {
    main: {
      pressure: Math.round(main['pressure'] * pressureHPAtoMMHGcoef),
      temp: main['temp'],
      humidity: main['humidity']
    },
    sys: {
      sunrise: new Date(sys['sunrise'] * 1000),
      sunset: new Date(sys['sunset'] * 1000)
    },
    weather: {
      icon: weather['icon']
    },
    wind: {
      speed: wind['speed'],
      degree: wind['degree']
    }
  };
  return model;
}

export function forecastDtoToModel(dto: any): ForecastModel[] {
  const list = dto['list'];
  const models = list.map(item => {
    const temp = item['temp'];
    const weather = item['weather'][0];
    const humidity = item['humidity'];
    const pressureHPAtoMMHGcoef = 0.75;

    return {
      date: new Date(item['dt'] * 1000),
      temperature: {
        day: Math.round(temp['day']),
        night: temp['night']
      },
      weather: {
        icon: weather['icon']
      },
      pressure: Math.round(item['pressure'] * pressureHPAtoMMHGcoef),
      humidity
    };
  });

  return models;
}
