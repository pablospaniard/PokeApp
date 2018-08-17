import React from 'react'
import {shallow} from 'enzyme'
import PokemonSummary from './PokemonSummary'

describe('PokemonSummary will render properly', () => {
  const loading = false
  const details = {}

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PokemonSummary details={details} loading={loading} />)
  })
  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot('PokemonSummary_snapshot_1')
  })
})
