import {connect} from 'react-redux'
import Layout from '../../components/Layout/Layout'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const {pokemons, err, loading} = state.pokemons
  return {
    pokemons,
    err,
    loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemons: () => dispatch(actions.fetchPokemons()),
    deletePokemons: () => dispatch(actions.deletePokemons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
