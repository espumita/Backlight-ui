import axios from 'axios'

export default {
    loadOpenApiConfiguration: () => {
        return axios.get('https://localhost:44349/back/openapi.json')
                    .then(response => response.data)
    }
}

  