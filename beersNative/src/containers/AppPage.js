import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import modalActions from '../actions/modal'
import App from '../components/App'

export function mapStateToProps(state) {
  return {modal: {...state.modal}}
}

export function mapDispatchToProps(dispatch) {
  return {modalAction: bindActionCreators(modalActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
