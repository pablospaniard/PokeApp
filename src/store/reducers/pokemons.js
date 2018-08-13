import * as constants from '../constants'

const initialStore = {
  pokemons: {},
  err: null,
  loading: null
}

const pokemonsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.FETCH_POKEMONS_START:
      return {...state, loading: true}
    case constants.FETCH_POKEMONS_SUCCESS:
      return {...state, loading: false, pokemons: action.payload}
    case constants.FETCH_POKEMONS_FAIL:
      return {...state, loading: false, err: action.payload}
    case constants.DELETE_POKEMONS:
      return {...state, pokemons: {}}

    default:
      return state
  }
}

export default pokemonsReducer
