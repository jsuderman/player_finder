import axios from "../../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import { useSelector } from "react-redux";
import { selectTeam } from "../../features/teamSlice";
import { firebase } from "../../firebase";
import { clickedPlayer } from "../../features/playerSlice";
import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid"; 

function Row() {
  const dispatch = useDispatch();
  const clickedTeam = useSelector(selectTeam);
  const [players, setPlayers] = useState([]);
  // const [addedPlayers, setAddedPlayers] = useState([]);

  const ref = firebase.firestore().collection("userTeam");

  const getUserTeam = () => {
    ref.get().then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
      });
    });
  };

  const handleClick = (value) => {
    dispatch(
      clickedPlayer({
        clickedPlayer: value.player,
      })
    );
    console.log(value.player);
    
    ref.add({
      playerName: value.player.FanDuelName,
      playerPhoto: value.player.PhotoUrl,
      playerPosition: value.player.DepthChartPosition,
      playerSalary: value.player.Salary,
      playerID: value.player.PlayerID,
    }).then((docRef) => {
      console.log("doc wirttien with ID:", docRef.id)
    }).catch((error) => {
      console.error("error:", error);
    })
    
  };

  useEffect(() => {
    async function fetchPlayers() {
      const req = await axios.get(
        `https://fly.sportsdata.io/v3/nba/stats/json/Players/${clickedTeam.Key.Key}?key=b7f466ebf369487fa904c3d202b049d1`
      );
      setPlayers(req.data);

      return req;
    }
    fetchPlayers();
  }, [clickedTeam]);
  console.log(players);

  useEffect(() => {
    getUserTeam();

  });

  // const addUserTeamPlayer = () => {
  //     ref.add({
  //         playerName: selectTeam
  //     })
  // }

  
  return (
    <div className="row">
      {players.map((player) => (
        <div className="row__playerInfo" key={player.PlayerId}>
          <img
            src={player.PhotoUrl}
            alt={player.FantastyDraftName}
            key={player.PlayerID}
          />
          <div className="row__playerName">{player.FanDuelName}</div>
          <div className="row__playerPosition">{player.DepthChartPosition}</div>
          <div className="row__playerSalary">{player.Salary}</div>
          <button className="row__button" onClick={() => handleClick({ player })}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default Row;
