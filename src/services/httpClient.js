import axios from 'axios';

//PROD baseURL: 'https://honeypet.herokuapp.com',
const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default httpClient;