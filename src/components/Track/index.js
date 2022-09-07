import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import PuffLoader from "react-spinners/PuffLoader";
import './styles.css'


const Track = () => {
    const fileTypes = ["mp3", "wav"];
    const [loading, setLoading] = useState(false);
    const handleChange = (file) => {
        setLoading(true);
    };
    return (
    <div className="track">
        <h1>
            Find the genre 
        </h1>
        <h2>
        of your track
        </h2>
        {
            !loading && 
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        }
        <PuffLoader color={"#67ab73"} loading={loading} size={150} />
    </div>
)};

export default connect(
  undefined,
  undefined,
)(Track)