import axios from 'axios'
import { Entity } from '../store/Entity'
import clientConfig from './clientConfig'

export default {
    getAll: (entity: Entity) => {
        return axios.get(`${clientConfig.rootUrl}/${clientConfig.urlPath}/api/types/${entity.name}/all`)
                    .then(response => response.data)
    },
    get: (entity: Entity, entityId: string) => {
        return axios.get(`${clientConfig.rootUrl}/${clientConfig.urlPath}/api/types/${entity.name}/entities/${entityId}`)
                    .then(response => response.data)
    }
}

  