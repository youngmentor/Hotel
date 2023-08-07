import { useRef, useState } from "react";
const AdminResetPassword: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    return (
        <div className='forget'>
            <div className='resetwrap'>
                <div className='forget_text'>
                    <h2>Please Enter a New password</h2>
                </div>
                <form className='forget_text'>
                    <input className='forget_input' ref={inputRef}
                        type="password" id="new-password"
                        value={newPassword}
                        placeholder="Enter your new password..."
                        onChange={e => setNewPassword(e.target.value)} />
                    <input className='forget_input' ref={inputRef}
                        type="password" id="new-password"
                        value={confirmNewPassword}
                        pattern={newPassword}
                        placeholder="Enter your new password..."
                        onChange={e => setConfirmNewPassword(e.target.value)} />
                    <button className='forget_button pointer' type='submit' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AdminResetPassword