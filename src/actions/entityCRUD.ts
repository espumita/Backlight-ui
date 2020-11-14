import { Action } from 'redux'
import { GET_ENTITY_REQUEST, GET_ENTITY_SUCCESS, GET_ENTITY_ERROR } from './actionsTypes'
import { Entity } from '../store/Entity'

export type GetEntityTypes = 
    GetEntityAction |
    GetEntitySuccessAction |
    GetEntityErrorAction 

export interface GetEntityAction extends Action {
    type: typeof GET_ENTITY_REQUEST,
    entity: Entity,
    id: string
}

export function getEntity(entity: Entity, id: string) : GetEntityAction {
    return {
        type: GET_ENTITY_REQUEST,
        entity: entity,
        id: id
    }
}

export interface GetEntityErrorAction extends Action {
    type: typeof GET_ENTITY_ERROR
}

export function getEntityError() : GetEntityErrorAction {
    return {
        type: GET_ENTITY_ERROR
    }
}

export interface GetEntitySuccessAction extends Action {
    type: typeof GET_ENTITY_SUCCESS
    entity: Entity,
    data: Object
}

export function getEntitySuccess(entity: Entity, data: object) : GetEntitySuccessAction {
    return {
        type: GET_ENTITY_SUCCESS,
        entity: entity,
        data: data
    }
}