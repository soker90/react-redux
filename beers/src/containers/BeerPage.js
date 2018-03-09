import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import modalActions from '../actions/modal'
import beerActions from '../actions/beer'
import Beer from '../components/Beer'

export function mapStateToProps (state) {
  return {...state.beers, ...state.modal}
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators({...beerActions, ...modalActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer)
