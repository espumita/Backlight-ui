import { entitySelector } from '../../src/selectors/entitySelector'
import { storeBuilder } from '../mockStoreBuilder'
import { openApiConfigurationBuilder } from '../openApiConfigurationBuilder'

const aPathName = '/api/type/Backlight.Sample.Web.Api.Entities.ExampleEntity'

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
    })

})