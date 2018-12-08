import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// custom components
import Header from "./Header/Header";
import SideNavbar from "./SideNavbar/SideNavbar";
import DashBoard from "./Dashboard/Dashboard";

function App() {
  const showDashBoard = false;

  const onClickHome = (toggleDashBoard: Boolean) => !toggleDashBoard;

  return (
    <Router>
      {
        showDashBoard ? (
          <DashBoard/>
        ) : (
          <div className="">
            <Header onClickHome={onClickHome}/>
            <SideNavbar/>
          </div>
        )
      }
    </Router>
  )
}

export default App;