import React, { useState, ChangeEvent, useEffect, } from 'react';
import './AddHotels.css'
import { RegisterHotel } from '../../../../component/APIS/TypeChecks';
import { useMutation } from '@tanstack/react-query';
import { addHotel } from '../../../../component/APIS/Mutation';
import ButtonLoading from '../../../../ButtonLoader/ButtonLoader';
const AddHotels = ({value}: { value: any }) => {
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
    };

    const { mutate, isLoading, } = useMutation(addHotel, {
        onSuccess: () => {
            // console.log(data)
        },
        onError: (error) => {
            console.error(error);
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
                        <label>Hotel Image</label>
                        <label className='ImageInput'>
                            <input
                                // style={{ display: "none" }}
                                type="file"
                                accept=".jpeg, .jpg, .png"
                                onChange={handleImageChange}
                                name='imageId'
                            />
                        </label>
                    </div>
                    <div className='InputDiv'>
                        <label>Hotel Name</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Hotel Name'
                            onChange={handleChange}
                            name='hotelName'
                            value={registerHotel.hotelName}
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Address</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Address'
                            onChange={handleChange}
                            value={registerHotel.address}
                            name='address'
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Email</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Email Address'
                            onChange={handleChange}
                            name='email'
                            value={registerHotel.email}
                        />
                    </div>
                    <div className='InputDivLocation'>
                        <div className='InputLocation'>
                            <label>City</label>
                            <input
                                className='AddHotelInput'
                                placeholder='City'
                                onChange={handleChange}
                                name='city'
                                value={registerHotel.city}
                            />
                        </div>
                        <div className='InputLocation'>
                            <label>State</label>
                            <input
                                className='AddHotelInput'
                                placeholder='State'
                                onChange={handleChange}
                                name='state'
                                value={registerHotel.state}
                            />
                        </div>
                    </div>
                    <div className='InputDiv'>
                        <label>Website</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Website(optional)'
                            onChange={handleChange}
                            name='website'
                            value={registerHotel.website}
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Description</label>
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
                    </div>
                </div>
                {/* <div className='InputMaiRight'>
                    <div className='ImagePreviewDiv'>
                        {imageData && <img src={imageData} alt="Preview" className='Hotel_Image_Preview' />}
                    </div>
                    <div className='InputPreview'>
                        <p className='Name'>Hotel Name: {registerHotel.hotelName}</p>
                        <p className='Name'>Address: {registerHotel.address}</p>
                        <p className='Name'>Email: {registerHotel.email}</p>
                        <p className='Name'>City: {registerHotel.city}</p>
                        <p className='Name'>State: {registerHotel.state}</p>
                        <p className='Name'>Website: {registerHotel.website}</p>
                        <p className='description'>Description: {registerHotel.description}</p>
                    </div>
                </div> */}
                <button className='Add_Hotel_Bttn' type='submit'>{isLoading ? <ButtonLoading /> : 'Add Hotel'}</button>
            </form>
        </div>
    )
}
export default AddHotels