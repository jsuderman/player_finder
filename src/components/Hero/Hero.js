import React, { useState, useEffect } from "react";
import "./Hero.css";
import axios from "../../axios";
import requests from "../../Requests";
import { useDispatch } from "react-redux";
import { clickedTeam } from "../../features/teamSlice";
import { useHistory } from 'react-router';

function Hero({ TeamID }) {
  const dispatch = useDispatch()
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fectchData() {
      const request = await axios.get(requests.fetchTeams);
      setTeams(request.data);

      return request;
    }
    fectchData();
  }, []);

  const handleClick = (value) => {
    dispatch(clickedTeam({
      Key: value.team,
    }));
    console.log(value.team);
  };

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
          <button 
          onClick={() => history.push("/userteam")} 
          className="hero__button">My Team</button>
        </div>
        <div className="hero__logo">
          {teams.map((team) => (
            <img
              onClick={() => handleClick({ team })}
              className="hero__teamLogo"
              src={team.WikipediaLogoUrl}
              alt={team.TeamID}
              key={team.key}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
