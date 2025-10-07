export default function MovieDisplay({ movie, loading, error }) {
  if (loading) return <p className='muted'>Loading…</p>;
  if (error) return <p className='error'>{error}</p>;
  if (!movie) return <p className='muted'>Search for a movie to begin.</p>;

  return (
    <article className='card'>
      <img src={movie.Poster} alt={movie.Title} />
      <div className='card-body'>
        <h2>{movie.Title}</h2>
        <p>
          {movie.Genre} • {movie.Year}
        </p>
        <p>
          <strong>Rated:</strong> {movie.Rated} • <strong>Runtime:</strong>{" "}
          {movie.Runtime}
        </p>
        <p className='plot'>{movie.Plot}</p>
      </div>
    </article>
  );
}
