import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { resetAdminPassword } from "../../../APIS/Mutation";
import { Params, useNavigate, useParams } from "react-router-dom";
import './AdminResetPassword.css'
import ButtonLoading from "../../../../ButtonLoader/ButtonLoader";
import Swal from "sweetalert2";
const AdminResetPassword: React.FC = () => {
    const navigate= useNavigate()
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const { id } = useParams<Params>()
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const {data, mutate, error, isLoading } = useMutation( ['resetadminpassword'], resetAdminPassword, {
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
                navigate('/alllogin/adminlogin')
            }, 4000)
            
        },
        onError: () => {
            console.log(error);
        }
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        mutate({id, password});
    };
    return (
        <div className='forget'>
            <p>{data?.data.message}</p>
            <div className='Admin_Resetwrap'>
                <img
                    src="/RoomLogo-RBG.png"
                    alt="NewRoomLogo"
                    className="Admin_Forget_Password_NewRoomLogo1"
                />
                <div className='forget_text'>
                    <h2>Please Enter a New password</h2>
                </div>
                <form className='AdminResetPasswordForm' onSubmit={handleSubmit}>
                    <input
                        className='forget_input'
                        ref={newPasswordRef}
                        type="password"
                        value={password}
                        placeholder="Enter your new password..."
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        className='forget_input'
                        ref={confirmPasswordRef}
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm your new password..."
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <button className='forget_button pointer' type='submit' >
                        {
                            isLoading ? <ButtonLoading /> : 'Submit'
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminResetPassword;
