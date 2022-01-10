import axios from "axios";

const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABKE_KEY;

const baseURL = `https://api.airtable.com/v0/${BASE}/Characters`;

const api = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${KEY}`,
    }
})

export default api;