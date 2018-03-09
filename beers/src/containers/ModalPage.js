import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import modalActions from '../actions/modal'
import Modal from '../components/Modal'

export function mapStateToProps (state) {
  return {...state.modal}
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(modalActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
