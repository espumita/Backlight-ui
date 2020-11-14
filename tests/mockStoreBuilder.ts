import { Store } from '../src/store/store'
import { Status } from '../src/store/Status'
import configureMockStore from 'redux-mock-store'
import { OpenAPIObject } from 'openapi3-ts'
import { Entity } from '../src/store/Entity'

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
                    paths: {}
                },
                status: Status.None 
            },
            currentEntity: {
                name: undefined,
                shortName: undefined,
                providers: []
            },
            currentEntityValue: {
                value: undefined,
                status: Status.None 
            },
            entitiesIds: {
                dictionary: new Map(),
                status: Status.None 
            }
        }
    }

    WithOpenApiConfiguration(openApiConfiguration: OpenAPIObject) : MockStoreBuilder{
        this.initialStore.openApi.configuration = openApiConfiguration
        return this
    }

    WithCurrentEntiy(entity: Entity) : MockStoreBuilder{
        this.initialStore.currentEntity = entity
        return this
    }

    build() {
        const mockStore = configureMockStore<Store>()
        return mockStore(this.initialStore)
    }

    buildState(){
        const store = this.build()
        return store.getState()
    }
}
