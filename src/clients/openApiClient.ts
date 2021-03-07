import axios from 'axios'
import clientConfig from './clientConfig'

export default {
    loadOpenApiConfiguration: () => {
        return axios.get(`${clientConfig.rootUrl}/${clientConfig.urlPath}/openapi.json`)
                    .then(response => response.data)
    }
}

  