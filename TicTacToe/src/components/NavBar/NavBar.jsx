import React from "react"
import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar (where) {
    const handleRefresh = (event) => {
        event.preventDefault();
        window.location.reload();
      };
    console.log(where)
  return (
    <div className="nav-container">
    <div className="nav-section">
      <div className="nav-project">
        <div className="navigation">
          <nav>
            <ul class="nav-type">
              <li><Link to={'/'}>Home</Link></li>
              <li>{(where.where == "computer") ? <Link to={'/player'}>vs Human</Link> : <Link to={'/select'}>vs Computer</Link> } </li>
              <li><a onClick={handleRefresh}  >Restart</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
  )
};

export default NavBar;
