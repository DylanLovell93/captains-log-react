import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className="Nav">
      <div className="navTitle">
        <Link to="./logs">
          <h1>Captain's Log</h1>
        </Link>
      </div>
      <button className="newLink">
        <Link to="./logs/new">New Log</Link>
      </button>
    </div>
  );
};

export default Nav;
