import { useRef, useState } from "react";
import './UserResetPassword.css'
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { Params, useNavigate, useParams } from "react-router-dom";
import { resetUserPassword } from "../../../APIS/Mutation";
import ButtonLoading from "../../../../ButtonLoader/ButtonLoader";
const UserResetPassword: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams<Params>()
    const inputRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const { data, mutate, isLoading } = useMutation(['resetuserpassword'], resetUserPassword, {
        onSuccess: (data) => {
            // console.log(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data?.data?.message,
                showConfirmButton: false,
                timer: 3000
            })
            setTimeout(() => {
                navigate('/alllogin/login')
            }, 4000)

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

        if (password !== confirmNewPassword) {
            console.log("Passwords do not match");
            return;
        }
        mutate({ id, password });
    };
    return (
        <div className='forget'>
            <p>{data?.data?.message}</p>
            <div className='UserResetwrap'>
                <img
                    src="/RoomLogo-RBG.png"
                    alt="NewRoomLogo"
                    className="Admin_Forget_Password_NewRoomLogo1"
                />
                <div className='forget_text'>
                    <h2>Please Enter a New password</h2>
                </div>
                <form className='UserResetPasswordForm' onSubmit={handleSubmit}>
                    <input
                        className='UserResetPasswordInput'
                        ref={inputRef}
                        type="password" 
                        value={password}
                        placeholder="Enter your new password..."
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        className='UserResetPasswordInput'
                        ref={inputRef}
                        type="password" 
                        value={confirmNewPassword}
                        pattern={password}
                        placeholder="Confirm your new password..."
                        onChange={e => setConfirmNewPassword(e.target.value)}
                    />
                    <button className='forget_button pointer' type='submit' >{isLoading ? <ButtonLoading /> : "Submit"}</button>
                </form>
            </div>
        </div>
    )
}

export default UserResetPassword