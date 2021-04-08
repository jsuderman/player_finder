import axios from '../../axios';
import React, { useState, useEffect }from 'react';
import "./Row.css";

function Row({ title, fetchUrl }) {

    const [teams, setTeams] = useState([]);
    const base_url = ""

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setTeams(request.data);
            return request
        }

        fetchData();
    }, [fetchUrl])

    console.log(teams)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__logo">
                {teams.map(team => (
                    <img 
                    src={team.WikipediaLogoUrl}
                    alt={team.TeamID}
                    key={team.key}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
