export interface WeatherForecastProps {
  day: string;
  img: string;
  imgAlt: string;
  conditions: string;
  time: string;
}

// Derived types using Pick utility.
// Picked prop and map prop.
export type WeatherIconProps = Pick<WeatherForecastProps, "img"> & {
  alt: WeatherForecastProps["imgAlt"];
};

export type WeatherDataProps = Pick<
  WeatherForecastProps,
  "conditions" | "time"
>;
