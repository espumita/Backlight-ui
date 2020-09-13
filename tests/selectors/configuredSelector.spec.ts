import { isApiConfiguredSelector } from '../../src/selectors/configSelectors'
import { storeBuilder } from '../mockStoreBuilder'
import { openApiConfigurationBuilder } from '../openApiConfigurationBuilder'
import initialState from '../../src/store/initialState'

const anEntityName = 'aEntity'
const aPathName = `/api/type/Backlight.Sample.Web.Api.Entities.${anEntityName}`

describe('Configuration selector', () => {
    
    test('is configured', () => {
        const store = storeBuilder()
        .WithOpenApiConfiguration(openApiConfigurationBuilder()
            .WithPath(aPathName)
            .build()
        )
        .buildState()
    
        const isConfigured = isApiConfiguredSelector.resultFunc(store.openApi.configuration)

        expect(isConfigured).toBeTruthy()
    })

    test('is not configured', () => {
        const store = storeBuilder()
        .WithOpenApiConfiguration(initialState.openApi.configuration)
        .buildState()
    
        const isConfigured = isApiConfiguredSelector.resultFunc(store.openApi.configuration)

        expect(isConfigured).toBeFalsy()
    })
})