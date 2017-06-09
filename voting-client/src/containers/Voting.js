import { connect } from 'react-redux'
import toJS from './toJS'
import Voting from '../components/Voting'
import { vote } from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
  pair: state.getIn(['vote', 'pair']),
  hasVoted: state.get('hasVoted'),
  winner: state.get('winner')
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  vote: entry => dispatch(vote(entry))
})

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Voting))
