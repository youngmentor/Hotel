import React, { useState, ChangeEvent, useEffect, } from 'react';
import './AddRooms.css'
import { RegisterRoom } from '../../../../component/APIS/TypeChecks';
import { addRoom } from '../../../../component/APIS/Mutation';
import { useMutation } from '@tanstack/react-query';
import ButtonLoading from '../../../../ButtonLoader/ButtonLoader';
const AddRooms = ({ adminId, hotelId, allRoom }: { adminId: string | undefined, hotelId: string | undefined, allRoom: () => void }) => {
    const [createRoom, setCreateRoom] = useState<RegisterRoom>({
        roomNumber: '',
        roomDescription: '',
        price: '',
        imageId: '',
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateRoom({
            ...createRoom,
            [event.target.name]: event.target.value
        });
    };
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setCreateRoom({
            ...createRoom,
            imageId: file
        });
        console.log(file)
        event.target.value = '';
    };
    const { mutate, isLoading } = useMutation(addRoom, {
        onSuccess: (data) => {
            allRoom()
            console.log(data)
        },
        onError: (error) => {
            console.error(error);
        },
    });
    const handlSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('roomNumber', createRoom.roomNumber);
        formData.append('roomDescription', createRoom.roomDescription);
        formData.append('price', createRoom.price);
        formData.append('imageId', createRoom.imageId);
        console.log(formData)
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
                        <label>Hotel Image</label>
                        {!createRoom.imageId ? (
                            <label className="RoomImageInput">
                                Add Image
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    accept=".jpeg, .jpg, .png"
                                    onChange={handleImageChange}
                                    name="imageId"
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
                            placeholder='Hotel Number'
                            onChange={handleChange}
                            type='number'
                            name='roomNumber'
                            value={createRoom.roomNumber}
                        />
                    </div>
                    <div className='RoomInputDiv'>
                        <label>Room Price</label>
                        <input
                            className='AddRoomInput'
                            placeholder='Price'
                            onChange={handleChange}
                            type='number'
                            name='price'
                            value={createRoom.price}
                        />
                    </div>
                    <div className='RoomInputDiv'>
                        <label>Room Description</label>
                        <textarea
                            name="roomDescription"
                            className='RoomInputDesc'
                            placeholder='Hotel Description'
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
                                const value = event.target.value;
                                setCreateRoom({
                                    ...createRoom,
                                    roomDescription: value
                                });
                            }}
                            value={createRoom.roomDescription}
                            rows={4}
                            cols={30}
                        />
                    </div>
                    <button className='Add_Room_Bttn'>{isLoading ? <ButtonLoading /> : "Add Hotel"}</button>
                </div>
            </form>
        </div>
    )
}
export default AddRooms