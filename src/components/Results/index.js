import { connect } from "react-redux";
import React, { useState } from "react";
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

let data = {"model1":{"data":{"classical":"0.32583416","country":"0.20497286","metal":"0.0065581384","pop":"0.46263486"},"metrics":{"accuracy":"0.7704485654830933","loss":"0.7446410059928894\n"}},"model2":{"data":{"classical":"0.0005395886","metal":"1.2948105e-08","pop":"0.009753511","reggae":"0.9897069"},"metrics":{"accuracy":"0.7889181971549988","loss":"1.074156403541565\n"}},"success":true}

const Results = () => {
    const [basicActive, setBasicActive] = useState('tab1');

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
        <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            <h3>
                Our First Model
            </h3>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            <h3>
                Our Second Model
            </h3>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
            <div className="data">
                <div className="model">
                    <div className="metrics">
                        <h2>
                            {'Accuracy:'}
                        </h2>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbar value={data.model1.metrics.accuracy*100} text={`${Math.round(data.model1.metrics.accuracy*10000)/100}%`} />;
                        </div>
                    </div>
                </div>
                <div className="model_data">
                    {Object.keys(data.model1.data).map(
                        genre => {
                            return (
                            <div className="label">
                                <h2>
                                    {genre + ' : ' + Math.round(data.model1.data[genre]*10000)/100 + '%'}
                                </h2>
                                <ProgressBar completed={Math.round(data.model1.data[genre]*10000)/100} />
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
           
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
        <div className="data">
                <div className="model">
                    <div className="metrics">
                        <h2>
                            {'Accuracy:'}
                        </h2>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbar value={data.model2.metrics.accuracy*100} text={`${Math.round(data.model2.metrics.accuracy*10000)/100}%`} />;
                        </div>
                    </div>
                </div>
                <div className="model_data">
                    {Object.keys(data.model2.data).map(
                        genre => {
                            return (
                            <div className="label">
                                <h2>
                                    {genre + ' : ' + Math.round(data.model2.data[genre]*10000)/100 + '%'}
                                </h2>
                                <ProgressBar completed={Math.round(data.model2.data[genre]*10000)/100} />
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
)};

export default connect(
  undefined,
  undefined,
)(Results)