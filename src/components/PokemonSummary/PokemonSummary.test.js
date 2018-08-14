import React from 'react'
import {render, cleanup} from 'react-testing-library'
import PokemonSummary from './PokemonSummary'

describe('PokemonSummary will render properly', () => {
  const loading = false
  const details = {}

  afterEach(cleanup)

  it('match snapshot', () => {
    const {container} = render(
      <PokemonSummary details={details} loading={loading} />
    )
    expect(container.firstChild).toMatchSnapshot('PokemonSummary_snapshot_1')
  })
})
