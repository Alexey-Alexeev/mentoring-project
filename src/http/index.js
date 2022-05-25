import axios from 'axios';

const $api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Authorization': `Basic ${localStorage.getItem('jwt')}`
    },
});

export default $api;