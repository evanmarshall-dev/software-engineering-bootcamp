import type { WeatherDataProps } from "../../types";

const WeatherData = ({ conditions, time }: WeatherDataProps) => {
  return (
    <>
      <p>
        <span>conditions: </span>
        {conditions}
      </p>
      <p>
        <span>time: </span>
        {time}
      </p>
    </>
  );
};

export default WeatherData;
