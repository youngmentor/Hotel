import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import "./AdminForgetPassword.css";

const AdminForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsButtonDisabled(newEmail === "");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsButtonDisabled(true)
    // Add your password reset logic here
  };

  return (
    <div className="Admin_forget">
      <form className="Admin_forget_text" onSubmit={handleSubmit}>
        <img
          src="/RoomLogo-RBG.png"
          alt="NewRoomLogo"
          className="Admin_Forget_Password_NewRoomLogo"
          onClick={() => navigate("/")}
        />
        <h2>Forgot Your Password?</h2>
        <p className="Admin_ForgetPasswordInstruction">
          Enter the email address you used to register. We will send you an
          email to reset your password.
        </p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="Admin_forget_input"
          placeholder="Email"
        />
        <button
          type="submit"
          className="Admin_forget_button"
          disabled={isButtonDisabled}
        >
          Submit
        </button>
        <div className="Admin_forget_pointer" onClick={() => navigate("/alllogin/adminlogin")}>
          <div className="Admin_forget_pointer_Wrap">
            <MdOutlineArrowBack fontSize={20} />
            <p>Back to login</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminForgetPassword;
