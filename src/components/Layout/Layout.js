import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Grid, LinearProgress} from '@material-ui/core'
import styled from 'styled-components'

import {Button} from '../UI'

import styles from './Layout.scss'
import PokemonsListContainer from '../../containers/PokemonListContainer/PokemonListContainer'

const StyledGrid = styled(Grid)`
  text-align: center;
`

class Layout extends Component {
  state = {
    pokemons: {},
    step: 0
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      pokemons: nextProps.pokemons.results
    }
  }

  onGetPokemonsHandler = () => {
    this.props.getPokemons()
    this.setState({
      step: 1
    })
  }

  onDeletePokemonsHandler = () => {
    this.props.deletePokemons()
    this.setState({
      step: 0
    })
  }

  render() {
    const {pokemons, step} = this.state
    const {loading} = this.props
    let content
    const buttons = (
      <Grid
        item
        xs={12}
        style={{display: 'flex', justifyContent: 'space-between'}}
      >
        <Button text="Get Pokemons" green onClick={this.onGetPokemonsHandler} />
        <Button text="Delete Pokemons" onClick={this.onDeletePokemonsHandler} />
      </Grid>
    )
    switch (step) {
      case 0:
        content = <Fragment>{buttons}</Fragment>
        break
      case 1:
        content = (
          <Fragment>
            {buttons}
            <Grid item xs={12} className={styles.Container}>
              {!loading ? (
                <PokemonsListContainer pokemons={pokemons} />
              ) : (
                <LinearProgress color="primary" />
              )}
            </Grid>
          </Fragment>
        )
        break
      default:
        content = <Fragment>{buttons}</Fragment>
    }
    return (
      <StyledGrid
        container
        className="App"
        justify="center"
        direction="column"
        style={{width: '25%', margin: 'auto'}}
      >
        {content}
      </StyledGrid>
    )
  }
}

Layout.propTypes = {
  getPokemons: PropTypes.func,
  deletePokemons: PropTypes.func,
  pokemons: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool
}

export default Layout
