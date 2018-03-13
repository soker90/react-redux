import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
  closeModal (){
    this.props.closeModal()
  }

  closeModalCallBack() {
    this.props.callback(this.props.extraParams)
    this.closeModal()
  }

  render() {
    const {title, body} = this.props

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4>{title}</h4>
          </div>
          <div className="modal-body">
            <p>{body}</p>
          </div>
          <div className="modal-footer">
            {(this.props.callback !== null) && <button onClick={() => this.closeModalCallBack()}>Accept</button>}
            <button onClick={() => this.closeModal()}>Close</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Modal
