import React from 'react';
import './AboutUs.less';
import GoogleMap from './GoogleMap/GoogleMap.js';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="App-intro container-aboutus">
                <div className="flex-item-intro">
                    <h2>Who are we?</h2>
                    <p>
                        Alpha Team is a group of passionate developers! We are located in Biscuit Factory in the Bermondsey area of London. We are close to the Bermondsey Tube station, Surrey Quey Overground station, and South Bermondsey train station. We are not far away from Southwark Park and Tower Bridge.
                    </p>
                    <br />
                    <h2>What are we doing now?</h2>
                    <p>
                        We are boosting our coding skills every day. We aim to help local businesses prosper and offer better services to people. Currently, we are working on this website to accelerate and streamline the renting process of the offices in Biscuit Factory. With this website, we hope the building managers and their clients have a happy transaction.
                    </p>
                    <br />
                    <h2>How can you find an office in Biscuit Factory?</h2>
                    <ul>
                        <li>Check the Google Map to find out our location.</li>
                        <li>Use the filter to select the offices that potentially meet your needs.</li>
                        <li>Use the floor plan to explore the details of the offices.</li>
                        <li>Finally, contact the Biscuit Factory building managers with the contact form. Alpha Team is always with you! :) </li>
                    </ul>
                </div>
                <div className="flex-item-map">
                    <GoogleMap />
                </div>
            </div>
        );
    }
}