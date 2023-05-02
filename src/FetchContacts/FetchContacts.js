import axios from "axios";

axios.defaults.baseURL = "https://6369042115219b84960d01a5.mockapi.io/"

export const FetchContacts = () => async dispatch => {
    try {
        const responce = await axios.get('/contacts');
    } catch(error) {
        return error.messege;
    }
}

