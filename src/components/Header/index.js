import { connect } from "react-redux";
import React from "react";
import logo from '../../public/logo.png';
import './styles.css'


const Header = ({handleTrackClick, handleInfoClick, handleDocsClick}) => {
  return (
  <div className="header_">
    <div className="header-seccion">
      <img className="header-logo" alt={"logo"} src={logo}/>
        <div className="font-weight-bold">
          <strong> MUSIC GENRE DETECTOR </strong>
        </div>
    </div>
    <div className="header-seccion">
      {/* <img className="header-logo" alt={"logo"} src={logo}/> */}
      <h6>
      <div onClick={()=>handleTrackClick()} className="black-text font-weight-bold">
          <strong> Home</strong>
        </div>
      </h6>
      <h6>
        <div onClick={()=>handleInfoClick()} className="green-text font-weight-bold">
          <strong> How does it work? </strong>
        </div>
      </h6>
      <h6>
        <div onClick={()=>handleDocsClick()} className="green-text font-weight-bold">
          <strong> Documentation </strong>
        </div>
      </h6>
    </div>
  </div>
)};

export default connect(
  (state, ownProps) => ({
    handleTrackClick: ownProps.functions[0],
    handleInfoClick: ownProps.functions[1],
    handleDocsClick: ownProps.functions[2],
  }),
  undefined,
)(Header)