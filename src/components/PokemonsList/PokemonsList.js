import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemText, Grid} from '@material-ui/core'
import styled from 'styled-components'

import PokemonSummary from '../PokemonSummary/PokemonSummary'

const StyledListItemText = styled(ListItemText)`
  text-transform: capitalize;
`

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
      <List>
        {this.props.pokemons.map((pokemon, i) => (
          <Grid key={i}>
            <ListItem onClick={() => this.onPokemonClickHandler(pokemon)}>
              <StyledListItemText
                style={{textAlign: 'center', cursor: 'pointer'}}
              >
                {pokemon.name}
              </StyledListItemText>
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
