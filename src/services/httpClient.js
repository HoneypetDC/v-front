import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 3000,
    headers: {
        "Content-Type": "aplication/json"
    }
})

export default httpClient;