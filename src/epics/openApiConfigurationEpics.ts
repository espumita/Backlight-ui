import { Epic, ofType } from 'redux-observable'
import { Action } from 'redux'
import { Store } from '../store/store'
import { exhaustMap, map, catchError, tap } from "rxjs/operators";
import { from, of } from "rxjs";
import { LOAD_OPEN_API_CONFIGURATION, LOAD_OPEN_API_CONFIGURATION_SUCCESS } from '../actions/actionsTypes';
import openApiClient from '../clients/openApiClient'
import { loadOpenApiConfigurationSuccess, loadOpenApiConfigurationError } from '../actions/loadOpenApiConfiguration'
import { selectCurrentEntity } from '../actions/selectCurrentEntity'
import { OpenAPIObject } from 'openapi3-ts'
import { entitiesFrom } from '../selectors/entitySelector'

export const loadOpenApiConfigurationEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
  ofType(LOAD_OPEN_API_CONFIGURATION),
  exhaustMap(action =>
    from(openApiClient.loadOpenApiConfiguration()).pipe(
      map((data: OpenAPIObject) => loadOpenApiConfigurationSuccess(data)),
      catchError((error: any) =>  of(loadOpenApiConfigurationError()))
    )
  )
)

export const loadOpenApiConfigurationSuccessEpic: Epic<Action, Action, Store> = (action$, store$) => action$.pipe(
  ofType(LOAD_OPEN_API_CONFIGURATION_SUCCESS),
    map(action => {
      var entities = entitiesFrom(store$.value.openApi.configuration.paths)
      return selectCurrentEntity(entities[0])
    })
)