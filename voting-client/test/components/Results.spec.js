/* global describe it */
import React from 'react'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-dom/test-utils'
import { expect } from 'chai'
import wrapFunctionalComponent from '../wrapFunctionalComponent'
import ResultsComponent from '../../src/components/Results'

const Results = wrapFunctionalComponent({ pure: true })(ResultsComponent)

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const component = renderIntoDocument(
      <Results
        pair={['Trainspotting', '28 Days Later']}
        tally={{ Trainspotting: 5 }}
      />
    )
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
    const [train, days] = entries.map(e => e.textContent)
    expect(entries.length).to.equal(2)
    expect(train).to.contain('Trainspotting')
    expect(train).to.contain('5')
    expect(days).to.contain('28 Days Later')
    expect(days).to.contain('0')
  })

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false
    const next = () => nextInvoked = true
    const component = renderIntoDocument(
      <Results pair={['Trainspotting', '28 Days Later']} next={next} />
    )
    const buttons = scryRenderedDOMComponentsWithClass(component, 'next')
    Simulate.click(buttons[0])
    expect(nextInvoked).to.equal(true)
  })

  it('renders the winner when there is one', () => {
    const component = renderIntoDocument(
      <Results
        winner='Trainspotting'
        pair={['Trainspotting', '28 Days Later']}
      />
    )
    const winners = scryRenderedDOMComponentsWithClass(component, 'winner')
    expect(winners.length).to.equal(1)
    expect(winners[0].textContent).to.contain('Trainspotting')
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
    expect(entries.length).to.equal(0)
  })
})
