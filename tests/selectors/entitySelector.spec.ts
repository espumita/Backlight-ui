import { entitySelector } from '../../src/selectors/entitySelector'
import { storeBuilder } from '../mockStoreBuilder'

describe('Entity selectors', () => {

    test('do not get any entity when there is no entities configured in the api', () => {
        const store = storeBuilder().build().getState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(0)
    })
})