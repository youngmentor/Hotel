import React, { useState, ChangeEvent, useEffect, } from 'react';
import './AddHotels.css'
import { RegisterHotel } from '../../../../component/APIS/TypeChecks';
import { useMutation } from '@tanstack/react-query';
import { addHotel } from '../../../../component/APIS/Mutation';
import ButtonLoading from '../../../../ButtonLoader/ButtonLoader';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AddHotels = ({ value }: { value: any }) => {
    const navigate = useNavigate()
    const [registerHotel, setRegisterHotel] = useState<RegisterHotel>({
        hotelName: '',
        address: '',
        website: '',
        description: '',
        email: '',
        city: '',
        state: '',
        imageId: '',
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterHotel({
            ...registerHotel,
            [event.target.name]: event.target.value
        });
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setRegisterHotel({
            ...registerHotel,
            imageId: file
        });
        // console.log(file)
        event.target.value = '';
    };

    const { mutate, isLoading } = useMutation(addHotel, {
        onSuccess: (data) => {
            console.log(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Hotel as been added successfully',
                showConfirmButton: false,
                timer: 4000
              })
              navigate('/admindash/allhotels')
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
        formData.append('hotelName', registerHotel.hotelName);
        formData.append('address', registerHotel.address);
        formData.append('description', registerHotel.description);
        formData.append('email', registerHotel.email);
        formData.append('city', registerHotel.city);
        formData.append('state', registerHotel.state);
        formData.append('imageId', registerHotel.imageId);
        formData.append('website', registerHotel.website);
        console.log(formData)
        mutate({ id: value?.id, formData });

        setRegisterHotel({
            hotelName: '',
            address: '',
            website: '',
            description: '',
            email: '',
            city: '',
            state: '',
            imageId: '',
        });
    };
    useEffect(() => {
        // console.log(value?.id)
    }, []);
    return (
        <div className="Add_Hotel_Main">
            <form className="Add_Hotel_Main_Wrap" onSubmit={handlSubmit}>
                <div className='InputMainLeft'>
                    <div className='InputDiv'>
                        {/* <label>Hotel Image</label> */}
                        <label className='ImageInput'>
                            Add Image
                            <input
                                style={{ display: "none" }}
                                type="file"
                                accept=".jpeg, .jpg, .png"
                                onChange={handleImageChange}
                                name='imageId'
                            />
                        </label>
                    </div>
                    <div className='InputDiv'>
                        <label className='Label2'>
                            Hotel Name
                            <input
                                className='AddHotelInput'
                                placeholder='Hotel Name'
                                onChange={handleChange}
                                name='hotelName'
                                value={registerHotel.hotelName}
                            />
                        </label>
                    </div>
                    <div className='InputDiv'>
                        <label className='Label2'>
                            Address
                            <input
                                className='AddHotelInput'
                                placeholder='Address'
                                onChange={handleChange}
                                value={registerHotel.address}
                                name='address'
                            />
                        </label>
                    </div>
                    <div className='InputDiv'>
                        <label className='Label2'>
                            Email
                            <input
                                className='AddHotelInput'
                                placeholder='Email Address'
                                onChange={handleChange}
                                name='email'
                                value={registerHotel.email}
                            />
                        </label>
                    </div>
                    <div className='InputDivLocation'>
                        <div className='InputLocation'>
                            <label className='label1'>
                                City
                                <input
                                    className='AddHotelInput'
                                    placeholder='City'
                                    onChange={handleChange}
                                    name='city'
                                    value={registerHotel.city}
                                />
                            </label>
                        </div>
                        <div className='InputLocation'>
                            <label className='label1'>
                                State
                                <input
                                    className='AddHotelInput'
                                    placeholder='State'
                                    onChange={handleChange}
                                    name='state'
                                    value={registerHotel.state}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='InputDiv'>
                        <label className='Label2'>
                            Website
                            <input
                                className='AddHotelInput'
                                placeholder='Website(optional)'
                                onChange={handleChange}
                                name='website'
                                value={registerHotel.website}
                            />
                        </label>
                    </div>
                    <div className='InputDiv'>
                        <label className='Label2'>
                            Description
                            <textarea
                                name="description"
                                className='InputDesc'
                                placeholder='Hotel Description'
                                onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
                                    const value = event.target.value;
                                    setRegisterHotel({
                                        ...registerHotel,
                                        description: value
                                    });
                                }}
                                value={registerHotel.description}
                                rows={20}
                                cols={50}
                            />
                        </label>
                    </div>
                    <div className='Add_Hotel_Bttn_Div' >
                        <button className='Add_Hotel_Bttn' type='submit'>{isLoading ? <ButtonLoading /> : 'Add Hotel'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddHotels