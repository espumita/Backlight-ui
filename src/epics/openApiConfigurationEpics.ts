import { Epic } from 'redux-observable'
import { Action } from 'redux'
import { Store } from '../store/store'
import { filter, exhaustMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import { LOAD_OPEN_API_CONFIGURATION } from '../actions/actionsTypes';
import openApiClient from '../clients/openApiClient'
import { createLoadOpenApiConfigurationSuccessAction, createLoadOpenApiConfigurationErrorAction } from '../actions/loadOpenApiConfiguration'
import { OpenAPIObject } from 'openapi3-ts';

export const configurationEpic: Epic<Action, Action, Store> = (action$, store) => action$.pipe(
  filter(action => action.type === LOAD_OPEN_API_CONFIGURATION), //check ofType operator
  exhaustMap(
    action => from(openApiClient.loadOpenApiConfiguration()).pipe(
      map((data: OpenAPIObject) => createLoadOpenApiConfigurationSuccessAction(data)),
      catchError(error =>  of(undefined))
    )
  )
)
