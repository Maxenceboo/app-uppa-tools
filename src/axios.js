import axios from "axios"

export default axios.create({
    baseURL: "http://vps-e1a777fe.vps.ovh.net:3003/api",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
})
