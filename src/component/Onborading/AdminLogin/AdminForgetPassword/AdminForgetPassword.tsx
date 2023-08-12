import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import "./AdminForgetPassword.css";
import { useMutation } from "@tanstack/react-query";
import { adminForgotPassword } from "../../../APIS/Mutation";
import ButtonLoading from "../../../../ButtonLoader/ButtonLoader";
const AdminForgetPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false)
    const [succesMessage, setSuccesMessage] = useState<string | null>('')
    // const [errorMessage,setErrorMessage] = useState<string>('')
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };
    const mutation = useMutation(['email'], (email: string) => adminForgotPassword(email), {
        onSuccess: (data) => {
            setSuccesMessage(data.data.message)
            setTimeout(() => {
                setSuccesMessage(null);
            }, 10000);
            console.log(data);
            setLoading(false)
            console.log(data);
        },
        onError: (error) => {
            setLoading(false)
            console.log(error);
        }
    });
    const handleSubmit = (event: React.FormEvent) => {
        setLoading(true)
        event.preventDefault();
        event.preventDefault();
        mutation.mutate(email);
    };

    return (
        <div className="Admin_forget">
            <div className="Admin_Forget_Succes_MessageDiv">
                {
                    succesMessage && <p className="SuccessMessage">{succesMessage}</p>
                }
            </div>
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
                        loading ? <ButtonLoading /> : " Submit"
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
