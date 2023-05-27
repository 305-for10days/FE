import axios from "axios";

// const PRD_URL = "115.85.181.165:8080";
const DEV_URL = "http://southoftheriver.synology.me:8082";

export const customAxios = axios.create({
    baseURL: DEV_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token") || "",
    },
});
