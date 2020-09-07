import { Epic } from 'redux-observable'
import { Action } from 'redux'
import { Store } from '../store/store'
import { filter, mapTo } from "rxjs/operators";
import { LOAD_OPEN_API_CONFIGURATION } from '../actions/actionsTypes';

export const configurationEpic: Epic<Action, Action, Store> = (action$, store) =>
  action$.pipe(
    filter(action => action.type === LOAD_OPEN_API_CONFIGURATION),
    mapTo({ type: 'TEST' })
  );
