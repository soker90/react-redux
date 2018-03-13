import modalAction from '../constants/actions/modal'

export default {
  openModal: modalData => ({type: modalAction.OPEN_MODAL, modalData}),
  closeModal: () => ({type: modalAction.CLOSE_MODAL})
}
