import { Store } from '../src/store/store'
import { Status } from '../src/store/Status'
import configureMockStore from 'redux-mock-store'

export function storeBuilder(){
    return new MockStoreBuilder()
}

export class MockStoreBuilder {
    initialStore: Store

    constructor(){
        this.initialStore = {
            openApi: {
                configuration: {
                    openapi: 'notDefined',
                    info: undefined,
                    paths: undefined
                },
                status: Status.None 
            }
        }
    }

    build(){
        const mockStore = configureMockStore<Store>()
        return mockStore(this.initialStore)
    }
}

