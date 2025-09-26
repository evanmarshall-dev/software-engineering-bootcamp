import type { WeatherIconProps } from "../../types";

const WeatherIcon = ({ img, alt }: WeatherIconProps) => {
  return <img src={img} alt={alt} />;
};

export default WeatherIcon;
