import { connect } from 'react-redux'
import toJS from './toJS'
import Results from '../components/Results'
import { next } from '../redux/actions'

const mapStateToProps = state => ({
  pair: state.getIn(['vote', 'pair']),
  tally: state.getIn(['vote', 'tally']),
  winner: state.get('winner')
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  next: () => dispatch(next())
})

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Results))
