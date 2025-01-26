import Movie from "./Movie";
import WatchedMovie from "./WatchedMovie";

export default function List({ list }) {
  return (
    <ul className="list">
      {list.map((e, i) =>
        list[i].runtime ? <WatchedMovie key={e.imdbID} movie={e} /> : <Movie key={e.imdbID} movie={e} />
      )}
    </ul>
  );
}
