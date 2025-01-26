import { useState } from "react";
import "../index.css";
import List from "./List";
import Summary from "./Summary";

export default function WatchedList({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <Summary watched={watched} />
          <List list={watched} />
        </>
      )}
    </div>
  );
}
