export interface ForecastModel {
  date: Date,
  temperature: {
    day: number,
    night: number
  },
  weather: {
    icon: string
  },
  pressure: number,
  humidity: number
}
