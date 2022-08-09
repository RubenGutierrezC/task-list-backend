import fetch from 'node-fetch'
import { PORT } from '../config.mjs';

const BASE_URL = `http://localhost:${PORT}`


export const sendRequest = async ({ path, method = "GET", body, token = "" }) => {
    try {

        const response = await fetch(`${BASE_URL}/${path}`, {
            method,
            headers: {
                "Content-type": "application/json"
            },
            body: body ? JSON.stringify(body) : null
        });

        const data = await response.json()

        return {
            response, data
        }

    } catch (error) {
        throw error
    }
}