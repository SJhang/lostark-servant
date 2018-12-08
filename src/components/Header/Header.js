import React from 'react';

function Header() {

  return (
    <div className="ui attached top menu">
      <div className="active item">
        Home
      </div>
      <div className="item">
        <div className="ui icon labeled button">
          <i className="camera retro icon"/>
          <span className="text">Screenshot</span>
        </div>
      </div>
      <div className="right menu">
        <div className="item">
          <div className="ui simple dropdown labeled icon button">
            <i className="world icon"/>
            <span className="text">Language</span>
            <div className="menu">
              <div className="item">English</div>
              <div className="item">한국어</div>
            </div>
          </div>
        </div>
        <div className="item"><i className="bell icon"/></div>
        <div className="item">
          <div className="ui icon pointing dropdown">
            <i className="wrench icon"/>
            <div className="menu">
              <div className="header">Sonik</div>
              <div className="item">Settings</div>
              <div className="item">Help</div>
              <div className="item">Created by bbongg</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;