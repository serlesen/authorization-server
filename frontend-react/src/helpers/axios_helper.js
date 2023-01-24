import axios from 'axios';
import { getUser } from './auth_helper';


const _callApi = (token) => {
    const headers = {
        Accept: "application/json",
        Authorization: "Bearer " + token
    };

    return axios.get("http://backend-gateway-client:8083/messages", { headers });
}

export const callApi = () => {
    return getUser().then(user => {
        if (user && user.access_token) {
            return _callApi(user.access_token).catch(error => {
                throw error;
            });
        } else {
            throw new Error('user is not logged in');
        }
    });
}
