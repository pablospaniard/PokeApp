import {connect} from 'react-redux'
import PokemonsList from '../../components/PokemonsList/PokemonsList'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const {details, err, loading} = state.details
  return {
    details,
    err,
    loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemonDetail: url => dispatch(actions.fetchPokemonDetails(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsList)
