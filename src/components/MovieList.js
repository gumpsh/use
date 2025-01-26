import { useState } from "react";
import "../index.css";
import List from "./List";

export default function MovieList({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <List list={movies} />}
    </div>
  );
}
