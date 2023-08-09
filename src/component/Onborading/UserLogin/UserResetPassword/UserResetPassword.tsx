import { useRef, useState } from "react";
import './UserResetPassword.css'
const UserResetPassword: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    return (
        <div className='forget'>
            <div className='UserResetwrap'>
            <img
                    src="/RoomLogo-RBG.png"
                    alt="NewRoomLogo"
                    className="Admin_Forget_Password_NewRoomLogo1"
                />
                <div className='forget_text'>
                    <h2>Please Enter a New password</h2>
                </div>
                <form className='UserResetPasswordForm'>
                    <input className='UserResetPasswordInput' ref={inputRef}
                        type="password" id="new-password"
                        value={newPassword}
                        placeholder="Enter your new password..."
                        onChange={e => setNewPassword(e.target.value)} />
                    <input className='UserResetPasswordInput' ref={inputRef}
                        type="password" id="new-password"
                        value={confirmNewPassword}
                        pattern={newPassword}
                        placeholder="Confirm your new password..."
                        onChange={e => setConfirmNewPassword(e.target.value)} />
                    <button className='forget_button pointer' type='submit' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserResetPassword