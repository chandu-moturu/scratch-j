import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;SCRATCH&nbsp;</span>
        <span class="hover-text" aria-hidden="true">
          &nbsp;SCRATCH&nbsp;
        </span>
      </button>
    </div>
  );
};

export default Navbar;
