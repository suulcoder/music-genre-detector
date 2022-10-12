import { connect } from "react-redux";
import React, { Fragment, useRef } from "react";
import "./styles.css";
import Header from "../Header";
import Track from "../Track";
import HowItWorks from "../HowItWorks";
import Documentation from "../Documentation";
import Results from "../Results";

const Home = () => {
  const uploader_ref = useRef(null);
  const how_it_works_ref = useRef(null);
  const docs_ref = useRef(null);

  const handleTrackClick = () => {
    uploader_ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleInfoClick = () => {
    how_it_works_ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleDocsClick = () => {
    docs_ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <Fragment>
        <Header functions={[handleTrackClick, handleInfoClick, handleDocsClick]}/>
        <div ref={uploader_ref}>
          <Results/>
        </div>
        <div ref={how_it_works_ref}>
          <HowItWorks/>
        </div>
        <div ref={docs_ref}>
          <Documentation/>
        </div>
        <div className="author">
          <h6 >
            Made by Suulcoder
          </h6>
        </div>
    </Fragment>
)};


export default connect(
  undefined,
  undefined,
)(Home)