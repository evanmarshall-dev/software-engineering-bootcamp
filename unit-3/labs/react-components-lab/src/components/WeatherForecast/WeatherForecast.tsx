import type { WeatherForecastProps } from "../../types";
import WeatherData from "../WeatherData/WeatherData";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./WeatherForecast.module.css";

const WeatherForecast = ({
  day,
  img,
  imgAlt,
  conditions,
  time,
}: WeatherForecastProps) => {
  return (
    <div className={styles.weather}>
      <h2>{day}</h2>
      <WeatherIcon img={img} alt={imgAlt} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecast;
