import reducer from '../../src/reducers/openApiConfigurationReducers'
import { LOAD_OPEN_API_CONFIGURATION, LOAD_OPEN_API_CONFIGURATION_SUCCESS, LOAD_OPEN_API_CONFIGURATION_ERROR } from '../../src/actions/actionsTypes'
import { LoadOpenApiConfigurationAction, LoadOpenApiConfigurationSuccessAction, LoadOpenApiConfigurationErrorAction } from '../../src/actions/loadOpenApiConfiguration'
import { Status } from '../../src/store/Status'
import { OpenApiStore } from '../../src/store/store'

describe('OpenApi configuration reducers should set state to', () => {

   test('not started at the beginning', () => {
        const loadConfiguration : LoadOpenApiConfigurationAction = {
            type: undefined
        }

        const newState = reducer(undefined, loadConfiguration)

        expect(newState).toStrictEqual({
            configuration: {
                openapi: 'notDefined',
                info: undefined,
                paths: {    }
            },
            status: Status.None 
        })
    })  

    test('set status to requested for load configuration action', () => {
        const loadConfiguration : LoadOpenApiConfigurationAction = {
            type: LOAD_OPEN_API_CONFIGURATION
        }
        const state : OpenApiStore = {
            configuration: {
                openapi: 'notDefined',
                info: undefined,
                paths: {    }
            },
            status: Status.Requested 
        }

        const newState = reducer(state, loadConfiguration)

        expect(newState).toStrictEqual({
            configuration: {
                openapi: 'notDefined',
                info: undefined,
                paths: {    }
            },
            status: Status.Requested 
        })
    })

    test('set status to success and save payload for success load configuration action', () => {
        const state : OpenApiStore = {
            configuration: {
                openapi: 'notDefined',
                info: undefined,
                paths: {    }
            },
            status: Status.None 
        }
        const loadConfiguration : LoadOpenApiConfigurationSuccessAction = {
            type: LOAD_OPEN_API_CONFIGURATION_SUCCESS,
            openApiConfiguration: {
                openapi: 'aOpenApiConfig',
                info: undefined,
                paths: {    }
            }
        }


        const newState = reducer(state, loadConfiguration)

        expect(newState).toStrictEqual({ 
            configuration: loadConfiguration.openApiConfiguration,
            status: Status.Success
        })
    })

    test('set error to error and save payload for success load configuration action', () => {
        const state : OpenApiStore = {
            configuration: {
                openapi: 'notDefined',
                info: undefined,
                paths: {    }
            },
            status: Status.Requested 
        }
        const loadConfiguration : LoadOpenApiConfigurationErrorAction = {
            type: LOAD_OPEN_API_CONFIGURATION_ERROR
        }


        const newState = reducer(state, loadConfiguration)

        expect(newState).toStrictEqual({ 
            configuration: state.configuration,
            status: Status.Error
        })
    })
    
})