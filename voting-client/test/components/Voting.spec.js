/* global describe it */
import React from 'react'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-dom/test-utils'
import { expect } from 'chai'
import Voting from '../../src/components/Voting'
import FunctionalComponentWrapper from '../Wrapper'

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <FunctionalComponentWrapper>
        <Voting pair={['Trainspotting', '28 Days Later']} />
      </FunctionalComponentWrapper>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).to.equal(2)
    expect(buttons[0].textContent).to.equal('Trainspotting')
    expect(buttons[1].textContent).to.equal('28 Days Later')
  })
})
