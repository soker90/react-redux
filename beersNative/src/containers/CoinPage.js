import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import modalActions from '../actions/modal'
import coinActions from '../actions/coin'
import Coin from '../components/Coin'

export function mapStateToProps (state) {
  return {...state.coins, ...state.modal}
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators({...coinActions, ...modalActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin)
