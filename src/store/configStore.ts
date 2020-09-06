import { createStore, compose, applyMiddleware } from 'redux'
import combinedReducers from '../reducers/combinedReducers'
import initialState from './initialState'

export default () => {
    const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools For Dev
    const middlewares : any[] = []
    return createStore(
        combinedReducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares))
    )
}