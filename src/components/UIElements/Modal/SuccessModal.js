import "./SuccessModal.scss";
import successRegistrationImg from "../../../assets/success.svg";

const SuccessModal = () => {
  return (
    <div className="success-modal">
      <h1 className="modal-title">User successfully registered</h1>
      <img
        width="328"
        height="290"
        src={successRegistrationImg}
        alt="Success"
      />
    </div>
  );
};

export default SuccessModal;
