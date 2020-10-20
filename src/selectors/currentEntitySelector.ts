import { createSelector } from 'reselect'
import { Store } from '../store/store'
import { Entity } from '../store/Entity'

export const currentEntitySelector = createSelector<Store, Store, Entity>(
    (state: Store) => state,
    (state: Store) => state.currentEntity
)