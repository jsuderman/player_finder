import axios from '../../axios';
import React, { useState, useEffect }from 'react';
import "./Row.css";
import requests from '../../Requests';
import { useSelector } from 'react-redux';
import { selectTeam } from '../../features/teamSlice';

function Row() {
    const clickedTeam = useSelector(selectTeam)
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchPlayers() {
            const req = await axios.get(`https://fly.sportsdata.io/v3/nba/stats/json/Players/${clickedTeam.Key.Key}?key=b7f466ebf369487fa904c3d202b049d1`);
            setPlayers(req.data);

            return req
        }
        fetchPlayers();
        
    }, [clickedTeam]);
    console.log(players)

    return (
        <div className="row">
            {players.map(player => (
                <div className="row__playerInfo" key={player.PlayerId}>
                    <img 
                    src={player.PhotoUrl}
                    alt={player.FantastyDraftName}
                    key={player.PlayerID}
                    />
                    <h3>{player.FanDuelName}</h3>
                    <h3>{player.DepthChartPosition}</h3>
                    <h3>{player.Salary}</h3>
                    <button>Add</button>
                </div>
            ))}

            
        </div>
    )
}

export default Row
