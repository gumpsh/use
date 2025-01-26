import "../index.css";

export default function NumResults({ numResults }) {
  return (
    <p className="num-results">
      Found <strong>{numResults}</strong> results
    </p>
  );
}
