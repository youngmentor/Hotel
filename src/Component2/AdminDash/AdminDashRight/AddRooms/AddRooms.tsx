import React, { useState, ChangeEvent, useEffect, } from 'react';
import './AddRooms.css'
import { RegisterRoom } from '../../../../component/APIS/TypeChecks';
import { addRoom } from '../../../../component/APIS/Mutation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ButtonLoading from '../../../../ButtonLoader/ButtonLoader';
import Swal from 'sweetalert2';
const AddRooms = ({ adminId, hotelId, allRoom }: { adminId: string | undefined, hotelId: string | undefined, allRoom: () => void }) => {
    const queryClient = useQueryClient();
    const [createRoom, setCreateRoom] = useState<RegisterRoom>({
        roomNumber: '',
        roomDescription: '',
        price: '',
        image: '',
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateRoom({
            ...createRoom,
            [event.target.name]: event.target.value
        });
        // console.log(createRoom)
    };
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setCreateRoom({
            ...createRoom,
            image: file
        });
        // console.log(file)
        event.target.value = '';
    };
    
    const { mutate, isLoading, } = useMutation(addRoom, {
        onSuccess: (data) => {
            allRoom()
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ["getOneHotelRooms"] });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Room Created Successfully',
                showConfirmButton: false,
                timer: 2500
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
        },
    });

    const handlSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('roomNumber', createRoom.roomNumber);
        formData.append('roomDescription', createRoom.roomDescription);
        formData.append('price', createRoom.price);
        formData.append('image', createRoom.image);
        // console.log(formData)
        // console.log(createRoom)
        mutate({ adminId, hotelId, formData });
    };
    useEffect(() => {

    }, []);

    return (
        <div className="Add_Room_Main">
            <div className='Back_To_All_Room_Bttn_Div'>
                <button onClick={allRoom} className='Back_To_All_Room_Bttn'>Back to All Room</button>
            </div>
            <form className="Add_Room_Main_Wrap" onSubmit={handlSubmit}>
                <div className='RoomInputMainLeft'>
                    <div className="RoomInputDiv">
                        <label>Room Image</label>
                        {!createRoom.image ? (
                            <label className="RoomImageInput">
                                Add Image
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    accept=".jpeg, .jpg, .png"
                                    onChange={handleImageChange}
                                    name="image"
                                    required
                                />
                            </label>
                        ) : (
                            <p>Image selected</p>
                        )}
                    </div>
                    <div className='RoomInputDiv'>
                        <label>Room Number</label>
                        <input
                            className='AddRoomInput'
                            placeholder='Room Number'
                            onChange={handleChange}
                            type='text'
                            name='roomNumber'
                            value={createRoom.roomNumber}
                            required
                        />
                    </div>
                    <div className='RoomInputDiv'>
                        <label>Room Price</label>
                        <input
                            className='AddRoomInput'
                            placeholder='Price'
                            onChange={handleChange}
                            type='text'
                            name='price'
                            value={createRoom.price}
                            required
                        />
                    </div>
                    <div className='RoomInputDiv'>
                        <label>Room Description</label>
                        <textarea
                            name="roomDescription"
                            className='RoomInputDesc'
                            placeholder='Room Description'
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
                                const value = event.target.value;
                                setCreateRoom({
                                    ...createRoom,
                                    roomDescription: value
                                });
                                // console.log(createRoom
                                // )
                            }}
                            value={createRoom.roomDescription}
                            rows={4}
                            cols={30}
                            required
                        />
                    </div>
                    <button className='Add_Room_Bttn'>{isLoading ? <ButtonLoading/> : "Add Room"}</button>
                </div>
            </form>
        </div>
    )
}
export default AddRooms