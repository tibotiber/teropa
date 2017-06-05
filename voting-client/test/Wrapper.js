import React from 'react'
import PropTypes from 'prop-types'

class FunctionalComponentWrapper extends React.Component {
  render () {
    return this.props.children
  }
}

FunctionalComponentWrapper.propTypes = {
  children: PropTypes.any
}

export default FunctionalComponentWrapper
