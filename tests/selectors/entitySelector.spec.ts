import { entitySelector } from '../../src/selectors/entitySelector'
import { storeBuilder } from '../mockStoreBuilder'

describe('Entity selectors', () => {

    test('do not get any entity when there is no entities configured in the api', () => {
        const store = storeBuilder().buildState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(0)
    })

    test('get an entity when they are configured in the api', () => {
        const store = storeBuilder()
            .WithOpenApiConfiguration({
                openapi: '3.0.0',
                info: {
                    title: "Backlight",
                    version: "1.0.0" 
                },
                paths: {
                    "/api/type/Backlight.Sample.Web.Api.Entities.ExampleEntity" : {}
                }
            })
            .buildState()
        
        const selectedEntities = entitySelector.resultFunc(store.openApi.configuration)

        expect(selectedEntities).toHaveLength(1)
    })

})