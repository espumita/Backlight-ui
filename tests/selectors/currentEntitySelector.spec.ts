import { currentEntitySelector, currentEntityValueSelector, currentEntityIdsSelector, firstCurrentEntityIdSelector } from '../../src/selectors/currentEntitySelector'
import { storeBuilder } from '../mockStoreBuilder'
import { entityBuilder } from '../entityBuilder'

const anEntityName = 'aEntityName'
const anEntityShortName = 'aEntityShortName'
const anEntityValue = { aPropName: "aPropValue" }
const anEntityId = "anEntityId"
const anotherEntityId = "anotherEntityId"

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

    test('get current entity value', () => {
        const store = storeBuilder()
        .WithCurrentEntiyValue(anEntityValue)
        .buildState()
    
        const value = currentEntityValueSelector(store)

        expect(value).toBe(anEntityValue)
    })

    test('get current entity ids', () => {
        const store = storeBuilder()
        .WithCurrentEntiy(entityBuilder()
            .WithName(anEntityName)
            .WithShortName(anEntityShortName)
            .build()
        )
        .WithEntitiesIds(anEntityName, [anEntityId, anotherEntityId])
        .buildState()
    
        const ids = currentEntityIdsSelector(store)

        expect(ids.length).toBe(2)
        expect(ids[0]).toBe(anEntityId)
        expect(ids[1]).toBe(anotherEntityId)
    })

    test('get empty ids list when entity is not loaded', () => {
        const store = storeBuilder()
        .WithCurrentEntiy(entityBuilder()
            .WithName(anEntityName)
            .WithShortName(anEntityShortName)
            .build()
        )
        .buildState()
    
        const ids = currentEntityIdsSelector(store)

        expect(ids.length).toBe(0)
    })

    test('get first id from current entity', () => {
        const store = storeBuilder()
        .WithCurrentEntiy(entityBuilder()
            .WithName(anEntityName)
            .WithShortName(anEntityShortName)
            .build()
        )
        .WithEntitiesIds(anEntityName, [anEntityId, anotherEntityId])
        .buildState()
    
        const id = firstCurrentEntityIdSelector(store)

        expect(id).toBe(anEntityId)
    })

    test('get empty string when thre is no first id for current entiy', () => {
        const store = storeBuilder()
        .WithCurrentEntiy(entityBuilder()
            .WithName(anEntityName)
            .WithShortName(anEntityShortName)
            .build()
        )
        .buildState()
    
        const id = firstCurrentEntityIdSelector(store)

        expect(id).toBe("")
    })
})
