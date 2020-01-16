import React from "react";
import { withRouter } from "react-router-dom";
import Search from "./Search";
import NetflixLogo from '../assets/netflix.png';
import NavigationItem from '../components/NavigationItem'


const Navbar = () => {
  return (
    <nav>
    <NavigationItem link="/" exact><img className="logo" src={NetflixLogo} alt="logo" /></NavigationItem>
      <div className="search-bar">
        <Search />
      </div>
      <div style={{ clear: "both" }} />
     
    </nav>
  );
};

export default withRouter(Navbar);
