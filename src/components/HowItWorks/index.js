import { connect } from "react-redux";
import React from "react";
import './styles.css'


const HowItWorks = () => {
    return (
    <div className="HowItWorks">
        <h1>
            How it works?
        </h1>
        <h2>
            Write all the info here
        </h2>
    </div>
)};

export default connect(
  undefined,
  undefined,
)(HowItWorks)