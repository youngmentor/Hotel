import './UserProfile.css'
const UserProfile = ({value}: {value: any}) => {

    const UserData= value
    console.log(UserData)
    return (
        <div className="UserProfile_Main">
            <div className="UserProfile_Main_Wrap">
                <h1>hello world</h1>
            </div>
        </div>
    )
}

export default UserProfile