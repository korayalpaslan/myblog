import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Headline = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="wrapper">
      <div className="headline container">
        <div
          className={isToggle ? "hamburger toggle" : "hamburger"}
          onClick={() => setIsToggle((prevState) => !prevState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/" className="text-no-decoration headline__title">
          <h3 className="heading-primary text-center">çok gezenler kulübü</h3>
        </Link>
        <button className="btn btn-primary">
          ARA&nbsp;
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Headline;
