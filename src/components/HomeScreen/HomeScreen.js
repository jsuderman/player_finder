import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import Row from "../Row/Row";
import requests from '../../Requests';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav /> 
            <Hero />
            <Row 
            title='Players'
            fetchUrl={requests.fetchTeams}
            // TeamID={TeamID}
            />
        </div>
    )
}

export default HomeScreen
