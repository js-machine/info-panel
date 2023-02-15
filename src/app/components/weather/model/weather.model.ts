export interface WeatherModel {
  main: {
    pressure: number;
    temp: number;
    humidity: number;
  };
  sys: {
    sunrise: Date;
    sunset: Date;
  };
  weather: {
    icon: string;
  };
  wind: {
    speed: number;
    degree: number;
  };
}
