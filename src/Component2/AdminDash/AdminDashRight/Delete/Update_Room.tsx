import { useState } from "react"
import { deleteRoom } from "../../../../component/APIS/Mutation"
import { useMutation } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import './Update_Room.css'
const Update = ({ value }: { value: any }) => {
    const [showDelete, setShowDelete] = useState<boolean>(false)
    const { roomId } = useParams()
    const ConfirmDeleteRoom = () => {
        setShowDelete(!showDelete)
    }
    const navigate = useNavigate()
    const { mutate } = useMutation(() => deleteRoom(roomId), {
        onSuccess: (data) => {
            console.log(data)
        }
    });
    const handleRoomDelete = () => {
        console.log(roomId)
        mutate();
    };
    const oneHotelId = value?.Hotels?.[0]?.id
    return (
        <div className="UpdateRoom_Main">
            {
                !showDelete &&
                <div className="UpdateBttnDiv">
                    <div className="UpdateBttnDiv_Wrap">
                        <button onClick={ConfirmDeleteRoom} className="DeleteBttn1">Delete rooom</button>
                        <button className="DeleteBttn1">Update Room</button>
                    </div>
                    <p onClick={(()=>navigate(`/admindash/allrooms/${value?.id}/${oneHotelId}`))}>Back to All Room</p>
                </div>
            }
            {
                showDelete &&
                <div className="DeleteRoomOption">
                    <p>Are you sure you want to delete this room</p>
                    <div className="DeleteBttnDiv">
                        <button onClick={handleRoomDelete} className="DeleteBttn1">yes</button>
                        <button onClick={ConfirmDeleteRoom} className="DeleteBttn2">no</button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Update
