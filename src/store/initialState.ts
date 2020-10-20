import { Store } from './store'
import { Status } from './Status'

const initialState: Store = {
    openApi: {
        configuration: {
            openapi: 'notDefined',
            info: undefined,
            paths: {    }
        },
        status: Status.None 
    },
    currentEntity : {
        name: "none",
        providers: []
    }
}

export default initialState