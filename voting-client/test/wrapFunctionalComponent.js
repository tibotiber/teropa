import React from 'react'

const wrapFunctionalComponent = WrappedComponent => {
  return class Component extends React.Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default wrapFunctionalComponent
