import reducer from '../../src/reducers/openApiConfigurationReducers'
import { LOAD_OPEN_API_CONFIGURATION_REQUEST, LOAD_OPEN_API_CONFIGURATION_SUCCESS, LOAD_OPEN_API_CONFIGURATION_ERROR } from '../../src/actions/actionsTypes'
import { LoadOpenApiConfigurationAction, LoadOpenApiConfigurationSuccessAction, LoadOpenApiConfigurationErrorAction } from '../../src/actions/loadOpenApiConfiguration'
import { Status } from '../../src/store/Status'
import { OpenApiStore } from '../../src/store/store'

describe('OpenApi configuration reducers should set state to', () => {

   test('not started at the beginning', () => {
        const action : LoadOpenApiConfigurationAction = {
            type: undefined
        }

        const newState = reducer(undefined, action)

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
        const action : LoadOpenApiConfigurationAction = {
            type: LOAD_OPEN_API_CONFIGURATION_REQUEST
        }
        const state = GivenAnApiStoreWith(Status.None)

        const newState = reducer(state, action)

        expect(newState).toStrictEqual({
            configuration: state.configuration,
            status: Status.Requested 
        })
    })

    test('set status to success and save payload for success load configuration action', () => {
        const state = GivenAnApiStoreWith(Status.Requested)
        const action : LoadOpenApiConfigurationSuccessAction = {
            type: LOAD_OPEN_API_CONFIGURATION_SUCCESS,
            openApiConfiguration: {
                openapi: 'aOpenApiConfig',
                info: undefined,
                paths: {    }
            }
        }

        const newState = reducer(state, action)

        expect(newState).toStrictEqual({ 
            configuration: action.openApiConfiguration,
            status: Status.Success
        })
    })

    test('set error to error and save payload for success load configuration action', () => {
        const state = GivenAnApiStoreWith(Status.Requested)
        const loadConfiguration : LoadOpenApiConfigurationErrorAction = {
            type: LOAD_OPEN_API_CONFIGURATION_ERROR
        }


        const newState = reducer(state, loadConfiguration)

        expect(newState).toStrictEqual({ 
            configuration: state.configuration,
            status: Status.Error
        })
    })

    function GivenAnApiStoreWith(status: Status) : OpenApiStore{
        return {
            configuration: {
                openapi: 'notDefined',
                info: undefined,
                paths: {    }
            },
            status: status 
        }
    }

})