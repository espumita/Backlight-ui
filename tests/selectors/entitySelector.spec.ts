import { entitySelector } from '../../src/selectors/entitySelector'
import { storeBuilder } from '../mockStoreBuilder'
import { openApiConfigurationBuilder } from '../openApiConfigurationBuilder'

const anEntityName = 'aEntity'
const aPathName = `/api/type/Backlight.Sample.Web.Api.Entities.${anEntityName}`
const aPathNameWithId = `/api/type/Backlight.Sample.Web.Api.Entities.${anEntityName}/entity/{id}`
const anotherEntityName = 'aEntity2'
const anotherPathName = `/api/type/Backlight.Sample.Web.Api.Entities.${anotherEntityName}/entity/{id}`
const anotherOneEntityName = 'zEntity'
const anotherOnePathName = `/api/type/Backlight.Sample.Web.Api.Entities.${anotherOneEntityName}`

describe('Entity selectors', () => {

    test('do not get any entity when there is no entities configured in the api', () => {
        const store = storeBuilder().buildState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(0)
    })

    test('get an entity when they are configured in the api', () => {
        const store = storeBuilder()
            .WithOpenApiConfiguration(openApiConfigurationBuilder()
                .WithPath(aPathName)
                .build()
            )
            .buildState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(1)
        expect(selectedEntities[0].name).toBe(anEntityName)
    })

    test('get an entity when they are configured in the api with id', () => {
        const store = storeBuilder()
            .WithOpenApiConfiguration(openApiConfigurationBuilder()
                .WithPath(anotherPathName)
                .build()
            )
            .buildState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(1)
        expect(selectedEntities[0].name).toBe(anotherEntityName)
    })

    test('get multiple entities sorted alphabetically when they are configured in the api', () => {
        const store = storeBuilder()
            .WithOpenApiConfiguration(openApiConfigurationBuilder()
                .WithPath(anotherOnePathName)
                .WithPath(aPathName)
                .WithPath(anotherPathName)
                .build()
            )
            .buildState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(3)
        expect(selectedEntities[0].name).toBe(anEntityName)
        expect(selectedEntities[1].name).toBe(anotherEntityName)
        expect(selectedEntities[2].name).toBe(anotherOneEntityName)
    })

    test('get an entity when its configured in diferent paths', () => {
        const store = storeBuilder()
            .WithOpenApiConfiguration(openApiConfigurationBuilder()
                .WithPath(aPathName)
                .WithPath(aPathNameWithId)
                .build()
            )
            .buildState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(1)
        expect(selectedEntities[0].name).toBe(anEntityName)
    })

})