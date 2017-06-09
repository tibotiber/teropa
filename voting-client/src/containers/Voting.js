import { connect } from 'react-redux'
import toJS from './toJS'
import Voting from '../components/Voting'

const mapStateToProps = state => ({
  pair: state.getIn(['vote', 'pair']),
  winner: state.get('winner')
})

export default connect(mapStateToProps)(toJS(Voting))
