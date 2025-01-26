import { useState } from "react";
import "../index.css";
import List from "./List";
import Summary from "./Summary";

export default function WatchedList({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <Summary
            amountWatchedMovies={watched.length}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />

          <List list={watched} />
        </>
      )}
    </div>
  );
}
