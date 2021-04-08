import React, { useState, useEffect } from 'react';
import "./Hero.css";
import axios from "../../axios";
import requests from '../../Requests';




function Hero() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function fectchData() {
            const request = await axios.get(requests.fetchTeams);
            setTeams(request.data);
                   
            return request;
        }
        fectchData();
    }, []);
    console.log(teams);

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
                <div className="hero__logo">
                {teams.map(team => (
                    <img
                    className="hero__teamLogo" 
                    src={team.WikipediaLogoUrl}
                    alt={team.TeamID}
                    key={team.key}
                    />
                ))}
            </div>
            </div>
        </header>
    )
}

export default Hero
