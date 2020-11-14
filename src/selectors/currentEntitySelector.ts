import { createSelector } from 'reselect'
import { EntityIdsStore, Store } from '../store/store'
import { Entity } from '../store/Entity'
import { CurrentEntityValueStore } from '../store/store'


//TODO ADD TEST TO THIS SELECTORS
export const currentEntitySelector = createSelector<Store, Store, Entity>(
    (state: Store) => state,
    (state: Store) => state.currentEntity
)

export const currentEntityValueSelector = createSelector<Store, CurrentEntityValueStore, object>(
    (state: Store) => state.currentEntityValue,
    (state: CurrentEntityValueStore) => state.value
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
