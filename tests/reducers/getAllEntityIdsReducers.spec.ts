import reducer from '../../src/reducers/getAllEntityIdsReducers'
import { GET_ALL_ENTITY_REQUEST, GET_ALL_ENTITY_SUCCESS, GET_ALL_ENTITY_ERROR } from '../../src/actions/actionsTypes'
import { GetAllEntityAction, GetAllEntitySuccessAction, GetAllEntityErrorAction } from '../../src/actions/getAllEnity'
import { Status } from '../../src/store/Status'
import { EntityIdsStore } from '../../src/store/store'
import { Entity } from '../../src/store/Entity'

const anEntityName = 'aEntity'
const anEntity : Entity = {
    name: anEntityName,
    shortName: "", 
    providers: []
}
const anEntityId = 'aEntityId'
const anotherEntityId = 'anotherEntityId'

describe('get entity ids reducers reducers should set state to', () => {

   test('not started at the beginning', () => {
        const action : GetAllEntityAction = {
            type: undefined,
            entity: undefined
        }

        const newState = reducer(undefined, action)

        expect(newState.status).toBe(Status.None)
        expect(newState.dictionary.size).toBe(0)
    })  

    test('set status to requested for load configuration action', () => {
        const action : GetAllEntityAction = {
            type: GET_ALL_ENTITY_REQUEST,
            entity: GivenAnEntityWith(anEntityName)
        }
        const state = GivenAnEntityIdsStoreWith(Status.None)

        const newState = reducer(state, action)

        expect(newState.status).toBe(Status.Requested)
        expect(newState.dictionary.size).toBe(0)
    })

    test('set status to success and save payload for success load configuration action', () => {
        const state = GivenAnEntityIdsStoreWith(Status.Requested)
        const action : GetAllEntitySuccessAction = {
            type: GET_ALL_ENTITY_SUCCESS,
            entity: anEntity,
            entitiesIds: [ anEntityId, anotherEntityId ]
        }

        const newState = reducer(state, action)

        expect(newState.status).toBe(Status.Success)
        expect(newState.dictionary.size).toBe(1)
        const entityRecord = newState.dictionary.get(anEntityName)
        expect(entityRecord.length).toBe(2)
        expect(entityRecord[0]).toBe(anEntityId)
        expect(entityRecord[1]).toBe(anotherEntityId)
    })

    test('set error to error and save payload for success load configuration action', () => {
        const state = GivenAnEntityIdsStoreWith(Status.Requested)
        const action : GetAllEntityErrorAction = {
            type: GET_ALL_ENTITY_ERROR
        }


        const newState = reducer(state, action)

        expect(newState.status).toBe(Status.Error)
        expect(newState.dictionary.size).toBe(0)
    })

    function GivenAnEntityWith(name: string) : Entity {
        return {
            name,
            shortName: "",
            providers: []
        }
    }

    function GivenAnEntityIdsStoreWith(status: Status) : EntityIdsStore {
        return {
            dictionary: new Map<string, string[]>(),
            status: status
        }
    }

})