// NOTES:
// State management needs to happen in the parent. Pass from higher scope to lower scope.
// Both MovieDisplay and Form SHARE data so it will be kept at the nearest common parent (App). This concept is called "lifting state up".

import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import MovieDisplay from "./components/MovieDisplay/MovieDisplay";

function App() {
  // Keep track of current movie and start at null.
  const [movie, setMovie] = useState(null);
  // Are we currently trying to fetch or load data from the API.
  const [loading, setLoading] = useState(false);
  // Keep track of any errors. No errors will be left as an empty string.
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_OMDB_KEY;

  useEffect(() => {
    // Load a default movie on first render
    // You can put in a default movie title here if you want.
    // getMovie("Inception");
    getMovie("");
  }, []);

  // Async because we use fetch API to query data from a different source. Could be our own server or a third party API. You can use all HTTP VERBS (GET, POST, PUT, DELETE, etc) with it.
  // * This function controls the state of the whole app and is passed down to the Form component so it can be called when the form is submitted.
  async function getMovie(searchTerm) {
    // Check to see if we have a search term. If not, exit the function. One line if statement does not need curly braces.
    if (!searchTerm) return;
    // We are starting a fetch, so set loading to true.
    setLoading(true);
    // Clear out any previous errors.
    setError("");
    // Try / catch block to handle errors. Used when code is error prone. Try the code in the try block and if there are any errors, jump to the catch block. When the try or catch is complete then set loading to false in the finally block.
    try {
      // The url we are fetching from. Template literal to insert the API key and search term. encodeURIComponent is used to make sure the search term is URL friendly (spaces, special characters, etc). Set equal to a variable so we can use it in the fetch function.
      // See API docs for what queries are available: https://www.omdbapi.com/.
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&plot=full&t=${encodeURIComponent(
        searchTerm
      )}`;
      // Whatever we get back from the API after request is the response object.
      const res = await fetch(url);
      // We need to extract the JSON data from it with the .json() method which is also async and returns a promise. These two steps are required when using fetch.
      const data = await res.json();

      // Check if data received or not as response will be "True" or "False". If false then set movie to null and set the error message we got from the API or a generic message if none was provided. If true, set the movie state to the data we received.
      if (data.Response === "True") {
        // setMovie is the function we use to update the movie state. We set it to the data received from the API.
        setMovie(data);
      } else {
        setMovie(null);
        setError(data.Error || "Movie not found.");
      }
    } catch {
      // If there was a network error or some other issue, set movie to null and set a generic error message.
      setMovie(null);
      setError("Network error. Try again.");
    } finally {
      // We are done trying to fetch data so set loading to false.
      setLoading(false);
    }
  }

  return (
    <div className='container'>
      <h1>React Movie Search</h1>
      {/* The name of the prop is what needs to be put inside the Form component. It can be anything you want but it needs to match the prop name in the Form component. Common practice would be to use the same name as the state variable. */}
      {/* <Form moviesearch={getMovie} /> */}
      {/* We lift state here because having getMovie as a prop allows us to keep the movie state in the App component. This helps re-render the MovieDisplay component when the movie state changes. */}
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} loading={loading} error={error} />
    </div>
  );
}

export default App;
