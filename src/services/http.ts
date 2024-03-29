import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.coinpaprika.com/v1/'
})


export default {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
}

