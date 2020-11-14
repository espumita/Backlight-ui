import { Action } from 'redux'
import { GET_ALL_ENTITY_REQUEST, GET_ALL_ENTITY_SUCCESS, GET_ALL_ENTITY_ERROR } from './actionsTypes'
import { Entity } from '../store/Entity'

export type GetAllEntityTypes = 
    GetAllEntityAction 
    | GetAllEntitySuccessAction 
    | GetAllEntityErrorAction

export interface GetAllEntityAction extends Action {
    type: typeof GET_ALL_ENTITY_REQUEST,
    entity: Entity
}

export function getAllEntity(entity: Entity) : GetAllEntityAction {
    return {
        type: GET_ALL_ENTITY_REQUEST,
        entity: entity
    }
}

export interface GetAllEntitySuccessAction extends Action {
    type: typeof GET_ALL_ENTITY_SUCCESS
    entity: Entity,
    entitiesIds: string[]
}

export function getAllEntitySuccess(entity: Entity, entitiesIds: string[]) : GetAllEntitySuccessAction {
    return {
        type: GET_ALL_ENTITY_SUCCESS,
        entity: entity,
        entitiesIds: entitiesIds
    }
}

export interface GetAllEntityErrorAction extends Action {
    type: typeof GET_ALL_ENTITY_ERROR
}

export function getAllEntityError() : GetAllEntityErrorAction {
    return {
        type: GET_ALL_ENTITY_ERROR
    }
}
