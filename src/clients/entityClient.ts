import axios from 'axios'

export default {
    get: (entityEndpoint: string) => {
        return axios.get(`https://localhost:44349/back${entityEndpoint}`)
                    .then(response => response.data)
    }
}

  