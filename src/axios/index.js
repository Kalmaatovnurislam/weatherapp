import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/weather?q="
})

export default instance