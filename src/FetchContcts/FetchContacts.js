import axios from "axios";

axios.defaults.baseURL = "https://6369042115219b84960d01a5.mockapi.io/";

export async function fetchContacts() {
    const {data} = await axios.get('/contacts')
    return data;
}