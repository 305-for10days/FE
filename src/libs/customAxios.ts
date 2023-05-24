import axios from "axios";

// const PRD_URL = "";
const DEV_URL = "http://southoftheriver.synology.me:8082";

export const customAxios = axios.create({
    baseURL: DEV_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token") || "",
    },
});
