import "../assets/styles/Modal.css";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "../assets/helpers/userReducer";

export default function Modal({ title, text, onClose, checkout = false }) {
  const navigate = useNavigate();
  const { dispatch } = useUser();

  return createPortal(
    <div className="custom-modal">
      <div className="custom-modal-dialog">
        <div className="custom-modal-content">
          <div className="custom-modal-header">
            <h5 className="custom-modal-title">{title}</h5>
          </div>
          <div className="custom-modal-body">{text}</div>
          <div className="custom-modal-footer">
            {checkout ? (
              <div className="checkoutBtns">
                <button
                  type="button"
                  className="custom-btn-close"
                  onClick={() => {
                    navigate("/E-Commerce-Store");
                    onClose();
                    }}
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  className="custom-btn-close"
                  onClick={() => {
                    dispatch({ type: "LOGOUT" });
                    navigate("/E-Commerce-Store");
                    onClose();
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="custom-btn-close"
                onClick={onClose}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
