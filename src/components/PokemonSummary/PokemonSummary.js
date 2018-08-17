import React from 'react'
import PropTypes from 'prop-types'

import styles from './PokemonSummary.scss'
import {LinearProgress, Card, CardContent, Typography} from '@material-ui/core'

const PokemonSummary = props => {
  const {details, loading} = props
  const html = (
    <Card>
      <CardContent className={styles.Summary}>
        <Typography variant="subheading" style={{margin: 10}}>
          {` Height: ${details.height}, Weight: ${details.weight}`}
        </Typography>
        <Typography variant="subheading" style={{margin: 10}}>
          {` Base experience: ${details.base_experience}`}
        </Typography>
      </CardContent>
    </Card>
  )
  const content = !loading ? html : <LinearProgress color="secondary" />
  return content
}

PokemonSummary.propTypes = {
  details: PropTypes.object,
  loading: PropTypes.bool
}

export default PokemonSummary
