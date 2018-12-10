import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// custom components
import Header from "./Header/Header";
import SideNavbar from "./SideNavbar/SideNavbar";
import DashBoard from "./Dashboard/Dashboard";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showSideNavbar: false };
  }

  onClickToggleSideNav = () => {
    const { showSideNavbar } = this.state;
    this.setState({ showSideNavbar: !showSideNavbar });
  };

  render() {
    const { showSideNavbar } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Header
            visible={showSideNavbar}
            onClickToggleSideNav={this.onClickToggleSideNav}
          />

          <SideNavbar
            visible={showSideNavbar}
            onClickToggleSideNav={this.onClickToggleSideNav}
          >
            <div id="main-container">
              <DashBoard />
            </div>
          </SideNavbar>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;