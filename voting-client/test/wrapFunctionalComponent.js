import React from 'react'

const wrapFunctionalComponent = ({ pure = false } = {}) => WrappedComponent => {
  const Component = pure ? React.PureComponent : React.Component
  return class extends Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default wrapFunctionalComponent
