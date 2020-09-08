import { Store } from './store'
import { Status } from './Status'

const initialState: Store = {
    openApi: {
        configuration: {
            openapi: 'notDefined',
            info: undefined,
            paths: undefined
        },
        status: Status.None 
    }
}

export default initialState