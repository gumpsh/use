import "../index.css";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";

export default function Main({ movies, watched }) {
  return (
    <main className="main">
      <MovieList movies={movies} />
      <WatchedList watched={watched} />
    </main>
  );
}
