import axios from "axios" // axios is a promise based HTTP client for the browser and node.js

export default axios.create({ // axios.create() returns a new instance of axios
    baseURL: "http://vps-e1a777fe.vps.ovh.net:3003/api", // set the baseURL to the api
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
})
