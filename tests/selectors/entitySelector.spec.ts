import { entitySelector } from '../../src/selectors/entitySelector'
import { Store } from '../../src/store/store'
import { Status } from '../../src/store/Status'

describe('Entity selectors', () => {

    test('do not get any entity when there is no entities configured in the api', () => {
        const mockStore : Store = {
            openApi: {
                configuration: {
                    openapi: 'notDefined',
                    info: undefined,
                    paths: undefined
                },
                status: Status.None 
            }
        }
        
        
        const selectedEntities = entitySelector.resultFunc(mockStore.openApi.configuration)


        expect(selectedEntities).toHaveLength(0)
    })
})