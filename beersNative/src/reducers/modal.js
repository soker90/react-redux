import modalAction from '../constants/actions/modal'

export function initialState () {
  return {
    open: false,
    title: '',
    body: '',
    callback: null,
    extraParams: {}
  }
}

function openModal(state, {modalData}) {
  return {
    ...state,
    open: true,
    title: modalData.title,
    body: modalData.body,
    callback: modalData.callback ? modalData.callback : null,
    extraParams: modalData.extraParams ? modalData.extraParams : {}
  }
}

function closeModal(state) {
  return {
    ...state,
    open: false,
    title: '',
    body: '',
    callback: null,
    extraParams: {}

  }
}

export default function (state = initialState(), action) {
  switch (action.type) {
    case modalAction.OPEN_MODAL:
      return openModal(state, action)
    case modalAction.CLOSE_MODAL:
      return closeModal(state, action)
    default:
      return state
  }
}
