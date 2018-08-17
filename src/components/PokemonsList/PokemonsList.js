import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemText, Grid} from '@material-ui/core'

import styles from './PokemonsList.scss'
import PokemonSummary from '../PokemonSummary/PokemonSummary'

class PokemonsList extends Component {
  state = {
    selected: null
  }

  onPokemonClickHandler = pokemon => {
    this.props.getPokemonDetail(pokemon.url)
    this.setState({
      selected: pokemon.name
    })
  }

  render() {
    const {loading, details} = this.props
    const {selected} = this.state
    return (
      <List style={{padding: 0}}>
        {this.props.pokemons.map((pokemon, i) => (
          <Grid key={i}>
            <ListItem
              onClick={() => this.onPokemonClickHandler(pokemon)}
              className={` ${styles.ListItem} ${
                loading ? styles.Disabled : null
              }`}
            >
              <ListItemText className={styles.Text}>
                {pokemon.name}
              </ListItemText>
            </ListItem>
            {selected === pokemon.name ? (
              <PokemonSummary loading={loading} details={details} />
            ) : null}
          </Grid>
        ))}
      </List>
    )
  }
}

PokemonsList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  getPokemonDetail: PropTypes.func,
  loading: PropTypes.bool,
  details: PropTypes.object
}

export default PokemonsList
