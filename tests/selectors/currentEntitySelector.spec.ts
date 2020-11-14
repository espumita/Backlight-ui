import { currentEntitySelector } from '../../src/selectors/currentEntitySelector'
import { storeBuilder } from '../mockStoreBuilder'
import { entityBuilder } from '../entityBuilder'

const anEntityName = 'aEntityName'
const anEntityShortName = 'aEntityShortName'

describe('Curremt entity selector', () => {
    
    test('get current entity', () => {
        const store = storeBuilder()
        .WithCurrentEntiy(entityBuilder()
            .WithName(anEntityName)
            .WithShortName(anEntityShortName)
            .build()
        )
        .buildState()
    
        const entity = currentEntitySelector(store)

        expect(entity.name).toBe(anEntityName)
        expect(entity.shortName).toBe(anEntityShortName)
        expect(entity.providers.length).toBe(0)
    })

})