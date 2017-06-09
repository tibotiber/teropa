import { connect } from 'react-redux'
import toJS from './toJS'
import Results from '../components/Results'

const mapStateToProps = state => ({
  pair: state.getIn(['vote', 'pair']),
  tally: state.getIn(['vote', 'tally']),
  winner: state.get('winner')
})

export default connect(mapStateToProps)(toJS(Results))
