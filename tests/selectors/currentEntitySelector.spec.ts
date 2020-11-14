import { currentEntitySelector } from '../../src/selectors/currentEntitySelector'
import { storeBuilder } from '../mockStoreBuilder'
import { openApiConfigurationBuilder } from '../openApiConfigurationBuilder'
import initialState from '../../src/store/initialState'

const anEntityName = 'aEntityName'
const anEntityShortName = 'aEntityShortName'

describe('Curremt entity selector', () => {
    
    test('get current entity', () => {
        const store = storeBuilder()
        .WithCurrentEntiy({
            name: anEntityName,
            shortName: anEntityShortName,
            providers: []
        })
        .buildState()
    
        const entity = currentEntitySelector(store)

        expect(entity.name).toBe(anEntityName)
        expect(entity.shortName).toBe(anEntityShortName)
        expect(entity.providers.length).toBe(0)
    })

})