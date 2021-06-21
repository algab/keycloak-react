import React from "react";

import logo from "../../assets/logo.svg";

import "./styles.css";

const Spinner: React.FC = () => (
  <div className="spinner">
    <img src={logo} alt="React" className="logo-react" />
  </div>
);

export default Spinner;
