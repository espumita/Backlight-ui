import axios from 'axios'
import { Entity } from '../store/Entity'

export default {
    getAll: (entity: Entity) => {
        return axios.get(`https://localhost:44349/back/api/types/${entity.name}/all`)
                    .then(response => response.data)
    },
    get: (entity: Entity, entityId: string) => {
        return axios.get(`https://localhost:44349/back/api/types/${entity.name}/entities/${entityId}`)
                    .then(response => response.data)
    }
}

  