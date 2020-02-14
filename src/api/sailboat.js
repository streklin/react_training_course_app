import axios from 'axios';

export const getSailboats = () => {
    return axios
        .get('dataFiles/sailboats.json')
        .catch((error) => {
            console.log("FAILURE");
        });
};
