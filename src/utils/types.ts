
export type LinkItemType = {
  text: string;
  link: string;
};

export interface IWeatherShortInfoType {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export interface ICurrentWeatherInfo {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeatherShortInfoType[];
};

export interface IHourlyWeatherInfo extends Omit<ICurrentWeatherInfo, 'sunrise' | 'sunset'> {pop: number}

export type IWeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrentWeatherInfo;
  hourly: IHourlyWeatherInfo[];
  daily: IHourlyWeatherInfo[]
};