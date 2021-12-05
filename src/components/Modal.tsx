import * as React from "react"

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className="modal-backdrop fade in" />
      <div
        className="modal fade in"
        id="project-modal"
        style={{ display: "block" }}
      >
        <div className="inline-menu-container">
          <a
            id="modal-close"
            className="close"
            data-dismiss="modal"
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </a>
        </div>
        <div className="modal-dialog">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Modal
