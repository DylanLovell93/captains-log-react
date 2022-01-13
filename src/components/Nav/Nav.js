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
      <div className="newLink">
        <Link to="./logs/new">
          <h3>NEW LOG</h3>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
