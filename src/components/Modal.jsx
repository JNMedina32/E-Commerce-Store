import "../assets/styles/Modal.css";
import { createPortal } from "react-dom";

export default function Modal({ title, text, onClose }) {
  return createPortal(
    <div className="custom-modal">
      <div className="custom-modal-dialog">
        <div className="custom-modal-content">
          <div className="custom-modal-header">
            <h5 className="custom-modal-title">{title}</h5>
          </div>
          <div className="custom-modal-body">{text}</div>
          <div className="custom-modal-footer">
            <button
              type="button"
              className="custom-btn-close"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
