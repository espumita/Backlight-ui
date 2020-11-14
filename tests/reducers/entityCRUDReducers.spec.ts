import reducer from '../../src/reducers/entityCRUDReducers'
import { GET_ENTITY_REQUEST, GET_ENTITY_SUCCESS, GET_ENTITY_ERROR } from '../../src/actions/actionsTypes'
import { GetEntityAction, GetEntitySuccessAction, GetEntityErrorAction } from '../../src/actions/entityCRUD'
import { Status } from '../../src/store/Status'
import { CurrentEntityValueStore } from '../../src/store/store'
import { Entity } from '../../src/store/Entity'

const anEntityName = 'aEntity'
const anEntity : Entity = {
    name: anEntityName,
    shortName: "", 
    providers: []
}
const anEntityId = 'aEntityId'
const anEntityData = { aPropName: "aPropValue" }

describe('CRUD read reducers should set state to', () => {

   test('not started at the beginning', () => {
        const action : GetEntitySuccessAction = {
            type: undefined,
            entity: undefined,
            data: undefined
        }

        const newState = reducer(undefined, action)

        expect(newState.status).toBe(Status.None)
        expect(newState.value).toBe(undefined)
    })  

    test('set status to requested for load configuration action', () => {
        const ation : GetEntityAction = {
            type: GET_ENTITY_REQUEST,
            entity: GivenAnEntityWith(anEntityName),
            id: anEntityId
        }
        const state = GivenACurrentEntityStoreWith(Status.None)

        const newState = reducer(state, ation)

        expect(newState.status).toBe(Status.Requested)
        expect(newState.value).toBe(undefined)
    })

    test('set status to success and save payload for success load configuration action', () => {
        const state = GivenACurrentEntityStoreWith(Status.Requested)
        const action : GetEntitySuccessAction = {
            type: GET_ENTITY_SUCCESS,
            entity: anEntity,
            data: anEntityData
        }

        const newState = reducer(state, action)

        expect(newState.status).toBe(Status.Success)
        expect(newState.value).toBe(anEntityData)
    })

    test('set error to error and save payload for success load configuration action', () => {
        const state = GivenACurrentEntityStoreWith(Status.Requested)
        const action : GetEntityErrorAction = {
            type: GET_ENTITY_ERROR
        }


        const newState = reducer(state, action)

        expect(newState.status).toBe(Status.Error)
        expect(newState.value).toBe(undefined)
    })

    function GivenAnEntityWith(name: string) : Entity {
        return {
            name,
            shortName: "",
            providers: []
        }
    }

    function GivenACurrentEntityStoreWith(status: Status) : CurrentEntityValueStore {
        return {
            value: undefined,
            status: status
        }
    }

})