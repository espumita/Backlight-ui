import axios from 'axios'
import clientConfig from './clientConfig'

export default {
    loadOpenApiConfiguration: () => {
        return axios.get(`${clientConfig.server}/${clientConfig.routePrefix}/openapi.json`)
                    .then(response => response.data)
    }
}

  