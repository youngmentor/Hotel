import { useState } from "react"
import { deleteRoom } from "../../../../component/APIS/Mutation"
import { useMutation } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const Update = () => {
    const [showDelete, setShowDelete] = useState<boolean>(false)
    const { roomId } = useParams()
    const ConfirmDeleteRoom = () => {
        setShowDelete(!showDelete)
    }
    const {mutate, data} = useMutation(() => deleteRoom(roomId),{
        onSuccess: (data)=>{
            console.log(data)
        }
    });
    console.log(data?.data)
    const handleRoomDelete = () => {
        console.log(roomId)
        mutate();
    };
    return (
        <div>
            {
                !showDelete &&
                <div>
                    <button onClick={ConfirmDeleteRoom}>delete rooom</button>
                    <button>Update Room</button>
                </div>
            }
            {
                showDelete &&
                <div>
                    <p>are you sure you want to delete</p>
                    <button onClick={handleRoomDelete}>yes</button>
                    <button onClick={ConfirmDeleteRoom}>no</button>
                </div>
            }
        </div>
    )
}
export default Update
