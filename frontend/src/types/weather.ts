export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}
