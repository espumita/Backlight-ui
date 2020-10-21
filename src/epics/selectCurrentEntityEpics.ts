import { Epic, ofType } from 'redux-observable'
import { Action } from 'redux'
import { Store } from '../store/store'
import { exhaustMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import { SELECT_CURRENT_ENTITY, GET_ALL_ENTITY } from '../actions/actionsTypes';
import { GetAllEntityAction} from '../actions/getAllEnity';
import entityClient from '../clients/entityClient'
import {  } from '../actions/loadOpenApiConfiguration'
import { getAllEntity, getAllEntitySuccess, getAllEntityError } from '../actions/getAllEnity'

export const selectCurrentEntityEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
    ofType(SELECT_CURRENT_ENTITY),
      map(action => getAllEntity(store$.value.currentEntity))
  )

export const getAllEntityEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
  ofType(GET_ALL_ENTITY),
  exhaustMap((action: GetAllEntityAction) =>
    from(entityClient.getAll(action.entity)).pipe(
      map((data: object) => getAllEntitySuccess(data)),
      catchError((error: any) =>  of(getAllEntityError()))
    )
  )
)