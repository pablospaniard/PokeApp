import * as constants from '../constants'

const initialStore = {
  err: null,
  loading: null,
  details: {}
}

const detailsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.FETCH_POKEMON_DETAILS_START:
      return {...state, loading: true}
    case constants.FETCH_POKEMON_DETAILS_SUCCESS:
      return {...state, loading: false, details: action.payload}
    case constants.FETCH_POKEMON_DETAILS_FAIL:
      return {...state, loading: false, err: action.payload}

    default:
      return state
  }
}

export default detailsReducer
