import "../index.css";
import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

export default function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo logo="🍿" title={"usePopcorn"} />
      <Search />
      <NumResults numResults={movies.length} />
    </nav>
  );
}
