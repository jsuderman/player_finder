import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./Userteam.css";
import { firebase } from "../../firebase";
import { useHistory } from 'react-router';


function UserTeam() {
  const [userPlayers, setUserPlayers] = useState([]);
  const history = useHistory();


  const ref = firebase.firestore().collection("userTeam");

  useEffect(() => {
    const unsub = ref.onSnapshot((snap) => {
        let items = [];
        snap.forEach((doc) => {
            items.push({...doc.data(), id: doc.id})
        });
        setUserPlayers(items)
        console.log(items)
    })
    
    return () => unsub();
  },[]);

  function deletePlayer(userPlayer) {
      ref.doc(userPlayer.id).delete().catch((err) => {
          console.error(err)
      });
  }

  return (
    <div className="userteam">
      <Nav />
      <div className="userteam__body">
        <h1>My Team</h1>
        <button onClick={() => history.push("/")}>Back to Teams</button>
        <div className="userteam__info">
          {userPlayers.map((userPlayer) => (
            <div className="userteam__details">
                <img 
                src={userPlayer.playerPhoto}
                alt={userPlayer.playerID}
                />
                <div>{userPlayer.playerName}</div>
                <div>Position: {userPlayer.playerPosition}</div>
                <div>Salary: {userPlayer.playerSalary}</div>
                <button onClick={() => deletePlayer(userPlayer)}>Remove</button>

            </div>
            
            
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserTeam;
