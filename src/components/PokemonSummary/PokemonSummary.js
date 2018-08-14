import React from 'react'
import PropTypes from 'prop-types'
import {LinearProgress, Card, CardContent, Typography} from '@material-ui/core'

const PokemonSummary = props => {
  const {details, loading} = props
  const html = (
    <Card>
      <CardContent>
        <Typography variant="subheading" style={{margin: 10}}>
          {` Height: ${details.height}, Weight: ${details.weight}`}
        </Typography>
        <Typography variant="subheading" style={{margin: 10}}>
          {` Base experience: ${details.base_experience}`}
        </Typography>
      </CardContent>
    </Card>
  )
  const content = !loading ? html : <LinearProgress />
  return content
}

PokemonSummary.propTypes = {
  details: PropTypes.object,
  loading: PropTypes.bool
}

export default PokemonSummary
