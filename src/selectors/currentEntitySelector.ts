import { createSelector } from 'reselect'
import { EntityIdsStore, Store } from '../store/store'
import { Entity } from '../store/Entity'
import { CurrentEntityValueStore } from '../store/store'
import { PropValue } from './PropValue'

export const currentEntitySelector = createSelector<Store, Store, Entity>(
    (state: Store) => state,
    (state: Store) => state.currentEntity
)

export const currentEntityValueSelector = createSelector<Store, CurrentEntityValueStore, object>(
    (state: Store) => state.currentEntityValue,
    (state: CurrentEntityValueStore) => state.value
)

export const currentEntityPropsValuesWithSelector = createSelector<Store, object, PropValue[]>(
    (state: Store) => state.currentEntityValue.value,
    (state: any) => {
        const result : PropValue[] = []
        if (state == undefined) return result
        Object.keys(state).map(key => {
            const propValue : PropValue = {
                propName: key,
                propValue: state[key.toString()]
            }
            result.push(propValue)
        })
        return result
    }
)

export const currentEntityIdsSelector = createSelector<Store, Entity, EntityIdsStore, string[]>(
    (state: Store) => state.currentEntity,
    (state: Store) => state.entitiesIds,
    (currentEntity: Entity, entitiesIds: EntityIdsStore) => {
        return entitiesIds.dictionary.has(currentEntity.name)
               ? entitiesIds.dictionary.get(currentEntity.name)
               : []
    }
)

export const firstCurrentEntityIdSelector = createSelector<Store, Entity, EntityIdsStore, string>(
    (state: Store) => state.currentEntity,
    (state: Store) => state.entitiesIds,
    (currentEntity: Entity, entitiesIds: EntityIdsStore) => {
        return entitiesIds.dictionary.has(currentEntity.name)
               ? entitiesIds.dictionary.get(currentEntity.name)[0]
               : ""
    }
)
