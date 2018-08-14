import React from 'react'
import {shallow} from 'enzyme'
import PokemonsList from './PokemonsList'
import {ListItem} from '@material-ui/core'

describe('Layout component should work as expected', () => {
  const props = {
    details: {},
    err: null,
    loading: false,
    pokemons: [{name: 'blablabla', url: 'http'}]
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PokemonsList {...props} />)
  })

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot('PokemonsList_snapshot_1')
  })

  it('should show ListItem for each pokemon', async () => {
    expect(wrapper.find(ListItem).length).toEqual(1)
  })
})
