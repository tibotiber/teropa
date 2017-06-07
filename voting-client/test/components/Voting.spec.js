/* global describe it */
import React from 'react'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
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

  it('invokes callback when a button is clicked', () => {
    let votedWith
    const vote = entry => votedWith = entry
    const component = renderIntoDocument(
      <FunctionalComponentWrapper>
        <Voting pair={['Trainspotting', '28 Days Later']} vote={vote} />
      </FunctionalComponentWrapper>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])
    expect(votedWith).to.equal('Trainspotting')
  })

  it('disables buttons when user has voted', () => {
    const component = renderIntoDocument(
      <FunctionalComponentWrapper>
        <Voting
          pair={['Trainspotting', '28 Days Later']}
          hasVoted='Trainspotting'
        />
      </FunctionalComponentWrapper>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).to.equal(2)
    expect(buttons[0].hasAttribute('disabled')).to.equal(true)
    expect(buttons[1].hasAttribute('disabled')).to.equal(true)
  })

  it('adds label to the voted entry', () => {
    const component = renderIntoDocument(
      <FunctionalComponentWrapper>
        <Voting
          pair={['Trainspotting', '28 Days Later']}
          hasVoted='Trainspotting'
        />
      </FunctionalComponentWrapper>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons[0].textContent).to.contain('Voted')
  })

  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <FunctionalComponentWrapper>
        <Voting winner='Trainspotting' />
      </FunctionalComponentWrapper>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).to.equal(1)
    expect(buttons[0].textContent).to.contain('Trainspotting')
  })
})
