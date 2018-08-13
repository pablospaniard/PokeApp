import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import LayoutContainer from './containers/LayoutContainer/LayoutContainer'
import pokemonsReducer from './store/reducers/pokemons'
import detailsReducer from './store/reducers/details'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  details: detailsReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <LayoutContainer />
  </Provider>,
  document.getElementById('root')
)
