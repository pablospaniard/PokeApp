import axios from 'axios'
import * as constants from './constants'

export const fetchPokemons = () => {
  return dispatch => {
    dispatch(fetchPokemonsStart())
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => dispatch(fetchPokemonsSuccess(res.data)))
      .catch(err => dispatch(fetchPokemonsFail(err)))
  }
}

const fetchPokemonsStart = () => {
  return {
    type: constants.FETCH_POKEMONS_START
  }
}

const fetchPokemonsSuccess = data => {
  return {
    type: constants.FETCH_POKEMONS_SUCCESS,
    payload: data
  }
}

const fetchPokemonsFail = err => {
  return {
    type: constants.FETCH_POKEMONS_FAIL,
    payload: err
  }
}

export const fetchPokemonDetails = url => {
  return dispatch => {
    dispatch(fetchPokemonDetailsStart())
    axios
      .get(url)
      .then(res => dispatch(fetchPokemonDetailsSuccess(res.data)))
      .catch(err => dispatch(fetchPokemonDetailsFail(err)))
  }
}

const fetchPokemonDetailsStart = () => {
  return {
    type: constants.FETCH_POKEMON_DETAILS_START
  }
}

const fetchPokemonDetailsSuccess = data => {
  return {
    type: constants.FETCH_POKEMON_DETAILS_SUCCESS,
    payload: data
  }
}

const fetchPokemonDetailsFail = err => {
  return {
    type: constants.FETCH_POKEMON_DETAILS_FAIL,
    payload: err
  }
}

export const deletePokemons = () => {
  return {
    type: constants.DELETE_POKEMONS
  }
}
