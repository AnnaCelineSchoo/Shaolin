import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/WorkoutPlan">Workout Plan</Link>
      </li>
      {/* <li><Link to="/News">News</Link></li>
            <li><Link to="/Contact">Conact</Link></li>
            <li><Link to="/About">About</Link></li> */}
    </ul>
  );
}

export default Navbar;
