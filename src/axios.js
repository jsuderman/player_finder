import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.sportsdata.io/v3/nba/'
});


export default instance;