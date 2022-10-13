import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import './styles.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getModelsData } from "../../reducers";
import * as actions from "../../actions/models";


const Results = ({data, onRestart}) => {
    const [basicActive, setBasicActive] = useState(Object.keys(data).length == 0 ? '' : Object.keys(data)[0]);

    const handleBasicClick = (value) => {

        if (value === basicActive) {
          return;
        }
    
        setBasicActive(value);
    };

    return (
    <div className="result">
        <h1>
            Here is my guess!
        </h1>
        <h2>
        BTW, nice sound!
        </h2>
        
        {
            Object.keys(data).length == 0 ?
            <h1 className="error">
                Oops Your song was so great that it broke our models!
            </h1> :
            <Fragment>
                <MDBTabs className='mb-3'>
                    {
                        Object.keys(data).map(
                            model => {
                                return (
                                    <MDBTabsItem key={model}>
                                        <MDBTabsLink onClick={() => handleBasicClick(model)} active={basicActive === model}>
                                            <h3>
                                                {model}
                                            </h3>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                )
                            }
                        )
                    }
                </MDBTabs>

                <MDBTabsContent>
                    {
                        Object.keys(data).map(
                            model => {
                                return (
                                    <MDBTabsPane show={basicActive === model} key={model}>
                                        <div className="data">
                                            <div className="model">
                                                <div className="metrics">
                                                    <h2>
                                                        {'Accuracy:'}
                                                    </h2>
                                                    <div style={{ width: 200, height: 200 }}>
                                                        <CircularProgressbar value={data[model].metrics.accuracy*100} text={`${Math.round(data[model].metrics.accuracy*10000)/100}%`} />;
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="model_data">
                                                {Object.keys(data[model].data).map(
                                                    genre => {
                                                        return (
                                                        <div className="label" key={genre}>
                                                            <h2>
                                                                {genre + ' : ' + Math.round(data[model].data[genre]*10000)/100 + '%'}
                                                            </h2>
                                                            <ProgressBar completed={Math.round(data[model].data[genre]*10000)/100} />
                                                        </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    
                                    </MDBTabsPane>
                                )
                            }
                        )
                    }
            </MDBTabsContent>
            </Fragment>
        }

        <div onClick={()=>onRestart()} className="Button">
            <h2> Indentify more tracks »</h2>
        </div>

        
    </div>
)};

export default connect(
    state => ({
        data: getModelsData(state)!=null ? getModelsData(state) : {}
    }),
    dispatch => ({
        onRestart() {
            dispatch(actions.restartModelApiCall());  
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    }),
)(Results)