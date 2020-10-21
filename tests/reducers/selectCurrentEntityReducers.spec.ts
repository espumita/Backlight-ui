import reducer from '../../src/reducers/selectCurrentEntityReducers'
import { SELECT_CURRENT_ENTITY } from '../../src/actions/actionsTypes'
import { SelectCurrentEntityAction } from '../../src/actions/selectCurrentEntity'
import { Entity } from '../../src/store/Entity'
import { Provider } from '../../src/selectors/Provider'

describe('Select current entity reducers should set state to', () => {

   test('not started at the beginning', () => {
        const action : SelectCurrentEntityAction = {
            type: undefined,
            entity: undefined
        }

        const newState = reducer(undefined, action)

        expect(newState).toStrictEqual({
            name: 'none',
            shortName: 'none',
            providers: []
        })
    })  

    test('set status to selected entity', () => {
        const action : SelectCurrentEntityAction = {
            type: SELECT_CURRENT_ENTITY,
            entity: {
                name: 'aName',
                shortName: 'aShortName',
                providers: [ Provider.Read ]
            }
        }
        const state : Entity = {
            name: 'none',
            shortName: 'none',
            providers: [ ]
        }

        const newState = reducer(state, action)

        expect(newState.name).toBe('aName')
        expect(newState.shortName).toBe('aShortName')
        expect(newState.providers.length).toBe(1)
        expect(newState.providers[0]).toBe(Provider.Read)
    })    
})