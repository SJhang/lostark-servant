import React from 'react';
import { Link } from "react-router-dom";

function SideNavbar() {
  return (
    <div className="ui vertical menu">
      <div className="item">Lost Ark Servant</div>
      <div className="item">
        <div className="ui input">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="item">
        <b>Calendar</b>
        <div className="menu">
          <Link className="item" to="/">Landing</Link>
          <Link className="item" to="/2">2</Link>
        </div>
      </div>
      <div className="item">
        <b>Map</b>
        <div className="menu">
          <Link className="item" to="/east">east</Link>
          <Link className="item" to="/west">west</Link>
        </div>
      </div>
      <div className="item">
        <b>Character</b>
        <div className="menu">
          <Link className="item" to="/character">My Character</Link>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar;