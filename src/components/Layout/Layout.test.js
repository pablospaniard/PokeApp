import React from 'react'
import {shallow} from 'enzyme'
import Layout from './Layout'
import {LinearProgress} from '@material-ui/core'

describe('Layout component should work as expected', () => {
  const props = {
    pokemons: {},
    err: null,
    loading: false
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Layout {...props} />)
  })

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot('Layout_snapshot_1')
  })

  it('should show Spinner while loading', async () => {
    wrapper.setState({step: 1})
    wrapper.setProps({loading: true})
    expect(wrapper.find(LinearProgress).length).toEqual(1)
  })
})
