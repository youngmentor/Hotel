import { useState } from "react"
import { deleteRoom } from "../../../../component/APIS/Mutation"
import { useMutation } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import './Update_Room.css'
import Swal from "sweetalert2"
import ButtonLoading from "../../../../ButtonLoader/ButtonLoader"
const Update = ({ value }: { value: any }) => {
    const [showDelete, setShowDelete] = useState<boolean>(false)
    const { roomId } = useParams()
    const ConfirmDeleteRoom = () => {
        setShowDelete(!showDelete)
    }
    const navigate = useNavigate()
    const { mutate, isLoading } = useMutation(() => deleteRoom(roomId), {
        onSuccess: (data) => {
            console.log(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data?.data?.message,
                showConfirmButton: false,
                timer: 2500
            })
            setTimeout(()=>{
            navigate(`/admindash/alladminroom/${value?.id}`)
            }, 3000)
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
                    <p onClick={(() => navigate(`/admindash/allrooms/${value?.id}/${oneHotelId}`))}>Back to All Room</p>
                </div>
            }
            {
                showDelete &&
                <div className="DeleteRoomOption">
                    <p>Are you sure you want to delete this room</p>
                    <div className="DeleteBttnDiv">
                        <button onClick={handleRoomDelete} className="DeleteBttn1">{isLoading? <ButtonLoading/>: 'yes'}</button>
                        <button onClick={ConfirmDeleteRoom} className="DeleteBttn2">no</button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Update
