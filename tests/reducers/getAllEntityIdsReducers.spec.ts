import reducer from '../../src/reducers/getAllEntityIdsReducers'
import { GET_ALL_ENTITY, GET_ALL_ENTITY_SUCCESS, GET_ALL_ENTITY_ERROR } from '../../src/actions/actionsTypes'
import { GetAllEntityAction, GetAllEntitynSuccessAction, GetAllEntityErrorAction } from '../../src/actions/getAllEnity'
import { Status } from '../../src/store/Status'
import { EntityIdsStore } from '../../src/store/store'
import { Entity } from '../../src/store/Entity'

const anEntityName = 'aEntity'
const anEntityId = 'aEntityId'
const anotherEntityId = 'anotherEntityId'

describe('get entity ids reducers reducers should set state to', () => {

   test('not started at the beginning', () => {
        const loadConfiguration : GetAllEntityAction = {
            type: undefined,
            entity: GivenAnEntityWith(anEntityName)
        }

        const newState = reducer(undefined, loadConfiguration)

        expect(newState.status).toBe(Status.None)
        expect(newState.dictionary.size).toBe(0)
    })  

    test('set status to requested for load configuration action', () => {
        const loadConfiguration : GetAllEntityAction = {
            type: GET_ALL_ENTITY,
            entity: GivenAnEntityWith(anEntityName)
        }
        const state = GivenAnEntityIdsStoreWith(Status.None)

        const newState = reducer(state, loadConfiguration)

        expect(newState.status).toBe(Status.Requested)
        expect(newState.dictionary.size).toBe(0)
    })

    test('set status to success and save payload for success load configuration action', () => {
        const state = GivenAnEntityIdsStoreWith(Status.Requested)
        const loadConfiguration : GetAllEntitynSuccessAction = {
            type: GET_ALL_ENTITY_SUCCESS,
            entityName: anEntityName,
            entitiesIds: [ anEntityId, anotherEntityId ]
        }

        const newState = reducer(state, loadConfiguration)

        expect(newState.status).toBe(Status.Success)
        expect(newState.dictionary.size).toBe(1)
        const entityRecord = newState.dictionary.get(anEntityName)
        expect(entityRecord.length).toBe(2)
        expect(entityRecord[0]).toBe(anEntityId)
        expect(entityRecord[1]).toBe(anotherEntityId)
    })

    test('set error to error and save payload for success load configuration action', () => {
        const state = GivenAnEntityIdsStoreWith(Status.Requested)
        const loadConfiguration : GetAllEntityErrorAction = {
            type: GET_ALL_ENTITY_ERROR
        }


        const newState = reducer(state, loadConfiguration)

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