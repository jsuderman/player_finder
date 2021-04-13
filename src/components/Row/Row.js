import axios from '../../axios';
import React, { useState, useEffect }from 'react';
import "./Row.css";
import requests from '../../Requests';

function Row({ title, fetchUrl }) {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchPlayers() {
            const req = await axios.get(requests.fetchPlayers);
            setPlayers(req.data);

            return req
        }
        fetchPlayers();
        
    }, []);
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
