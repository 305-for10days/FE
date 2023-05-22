import axios from "axios";

const END_POINT = "https://localhost.8080";

export const customAxios = axios.create({
    baseURL: END_POINT,
    headers: {
        Authorization: "",
    },
});
