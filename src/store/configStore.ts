import { createStore, compose, applyMiddleware, Action } from 'redux'
import combinedReducers from '../reducers/combinedReducers'
import initialState from './initialState'
import { createEpicMiddleware } from "redux-observable";
import { Store } from './store'
import combinedEpics from '../epics/combinedEpics'

export default () => {
    const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools For Dev
    const epicMiddleware = createEpicMiddleware<Action,Action,Store>()
    const middlewares = [
        epicMiddleware
    ]
    const store = createStore(
        combinedReducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares))
    )
    epicMiddleware.run(combinedEpics);
    return store

}