import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import weather from "./data/weather";

const App = () => {
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weather.map((forecast) => (
          <WeatherForecast key={forecast.day} {...forecast} />
        ))}
      </section>
    </>
  );
};

export default App;
