import React from "react";
import aboutme from "../../assets/icons/about-me.svg";
import "./navbar.css";
import scratch from '../../assets/icons/scratch.png'

const Navbar = () => {
  return (
    <div className="flex nav" style={{ justifyContent: "space-between" }}>
      {/* <div className="nav ">
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;SCRATCH&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;SCRATCH&nbsp;
          </span>
        </button>
      </div> */}
      <div className="p-1 ml-10">
        <img src={scratch} alt="" style={{width:"50px"}}/>
      </div>
      <div className="p-3 mr-10">
        <a href="https://chandra-sekhar-moturu.netlify.app/#portfolio">
          <img src={aboutme} alt="" style={{ width: "30px" }}></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
