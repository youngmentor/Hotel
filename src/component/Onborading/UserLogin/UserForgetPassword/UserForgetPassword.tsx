import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import './UserForgetPassword.css'
import Swal from "sweetalert2";
import { userForgotPassword } from "../../../APIS/Mutation";
import ButtonLoading from "../../../../ButtonLoader/ButtonLoader";
const UserForgetPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const navigate = useNavigate()
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const { isLoading, mutate } = useMutation(['email'], (email: string) => userForgotPassword(email), {
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
        onError: (error: any) => {
            if (error?.response && error?.response?.data && error?.response?.data?.message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.message,
                });
            }
        }
    });
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        mutate(email);
        setEmail('')
    };
    return (
        <div className='forget'>
            <form className='forget_text' onSubmit={handleSubmit}>
                <img
                    src='/RoomLogo-RBG.png'
                    alt='NewRoomLogo'
                    className='LoginNewRoomLogo'
                    onClick={(() => navigate('/'))} />
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
                    className='forget_input'
                    placeholder='Email'
                />
                <button
                    type="submit"
                    className="forget_button"
                >
                    {
                        isLoading ? <ButtonLoading /> : " Submit"
                    }
                </button>
                <div className="Admin_forget_pointer" onClick={() => navigate("/alllogin/login")}>
                    <div className="Admin_forget_pointer_Wrap">
                        <MdOutlineArrowBack fontSize={20} />
                        <p>Back to login</p>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default UserForgetPassword