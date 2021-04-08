import React, { useState, useEffect } from 'react';
import "./Hero.css";
import axios from "../../axios";
import requests from '../../Requests';




function Hero() {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        async function fectchData() {
            const request = await axios.get(requests.fetchTeams);
            setTeam(request.data);
                   
            return request;
        }
        fectchData();
    }, []);
    console.log(team);

    return (
        <header 
            className="hero"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            }}
        >
            <div className="hero__contents">
                <h1 className="hero__title">NBA General Manager</h1>
                <div className="hero__buttons">
                    <button className="hero__button">New Team</button>
                    <button className="hero__button">My Team</button>
                </div>
                <h1 className="hero__description">this is the test description</h1>
            </div>
        </header>
    )
}

export default Hero
