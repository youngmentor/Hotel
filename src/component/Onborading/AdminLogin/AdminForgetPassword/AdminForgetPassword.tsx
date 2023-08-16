import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import "./AdminForgetPassword.css";
import { useMutation } from "@tanstack/react-query";
import { adminForgotPassword } from "../../../APIS/Mutation";
import ButtonLoading from "../../../../ButtonLoader/ButtonLoader";
import Swal from "sweetalert2";
const AdminForgetPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate();
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };
    const {isLoading, mutate} = useMutation(['email'], (email: string) => adminForgotPassword(email), {
        onSuccess: (data) => {
            // console.log(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data?.data?.message,
                showConfirmButton: false,
                timer: 4000
              })
        },
        onError: () => {
        }
    });
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        mutate(email);
    };

    return (
        <div className="Admin_forget">
            <form className="Admin_forget_Form" onSubmit={handleSubmit}>
                <img
                    src="/RoomLogo-RBG.png"
                    alt="NewRoomLogo"
                    className="Admin_Forget_Password_NewRoomLogo"
                    onClick={() => navigate("/")}
                />
                <h2>Forgot Your Password?</h2>
                <div className="Admin_ForgetPasswordInstruction">
                    <p className="p">
                        Enter the email address you used to register. We will send you an
                        email to reset your password.
                    </p>
                </div>
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
                >
                    {
                        isLoading ? <ButtonLoading /> : " Submit"
                    }
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
