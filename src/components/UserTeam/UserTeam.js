import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./Userteam.css";
import { firebase } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

function UserTeam() {
  const [userPlayers, setUserPlayers] = useState([]);


  const ref = firebase.firestore().collection("userTeam");


//   function getUserPlayers() {
//     ref.onSnapshot((snap) => {
//         let items = [];
//         snap.forEach((doc) => {
//             items.push({...doc.data(), id: doc.id})
//         });
//         setUserPlayers(items)
        
//     })
//     console.log(userPlayers)
//   }

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

    //   getUserPlayers();
    // const getPlayersfromDB = async () => {
    //   const db = firebase.firestore();
    //   const data = await db.collection("userTeam").get();
    //   setUserPlayers(data.docs.map((doc) => doc.data()));
      

    //   return data;
    // };
    // getPlayersfromDB();
    // console.log(userPlayers);
  }, []);

//   const deletePlayer = () => {
//       ref.doc().delete().then(() => {
//           console.log("deleted");
//         }).catch((error) => {
//         console.error("error", error);
//         })
//     }

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
