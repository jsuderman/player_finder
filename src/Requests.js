const KEY = "b7f466ebf369487fa904c3d202b049d1";

const requests = {
    fetchTeams: `scores/json/teams?key=${KEY}`,
    fetchPlayers: `/stats/json/Players/was?key=${KEY}`
};

export default requests;