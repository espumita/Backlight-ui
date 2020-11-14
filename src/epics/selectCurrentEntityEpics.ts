import { Epic, ofType } from 'redux-observable'
import { Action } from 'redux'
import { Store } from '../store/store'
import { exhaustMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import { SELECT_CURRENT_ENTITY, GET_ALL_ENTITY_REQUEST, GET_ALL_ENTITY_SUCCESS, GET_ENTITY_REQUEST } from '../actions/actionsTypes';
import entityClient from '../clients/entityClient'
import {  } from '../actions/loadOpenApiConfiguration'
import { getAllEntity, getAllEntitySuccess, getAllEntityError, GetAllEntityAction } from '../actions/getAllEnity'
import { getEntity, getEntitySuccess, getEntityError, GetEntityAction } from '../actions/entityCRUD'
import { firstCurrentEntityIdSelector } from '../selectors/currentEntitySelector'


export const selectCurrentEntityEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
    ofType(SELECT_CURRENT_ENTITY),
      map(action => getAllEntity(store$.value.currentEntity))
  )

export const getAllEntityEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
  ofType(GET_ALL_ENTITY_REQUEST),
  exhaustMap((action: GetAllEntityAction) =>
    from(entityClient.getAll(action.entity)).pipe(
      map((data: string[]) => getAllEntitySuccess(action.entity, data)),
      catchError((error: any) =>  of(getAllEntityError()))
    )
  )
)

export const getAllEntitySuccessEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
  ofType(GET_ALL_ENTITY_SUCCESS),
    map(action => {
      var firstCurrentEntityId = firstCurrentEntityIdSelector(store$.value)
      return getEntity(store$.value.currentEntity, firstCurrentEntityId)
    })
)

export const getFirstEntityEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
  ofType(GET_ENTITY_REQUEST),
  exhaustMap((action: GetEntityAction) =>
    from(entityClient.get(action.entity, action.id)).pipe(
      map((data: object) => getEntitySuccess(action.entity, data)),
      catchError((error: any) =>  of(getEntityError()))
    )
  )
)