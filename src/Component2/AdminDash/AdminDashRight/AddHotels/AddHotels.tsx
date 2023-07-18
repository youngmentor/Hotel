import React, { useState, ChangeEvent, useEffect, } from 'react';
import './AddHotels.css'
const AddHotels: React.FC = () => {
    const [imageData, setImageData] = useState<string>('');

    const [textValue, setTextValue] = useState<string>('');

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setTextValue(value);
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const dataURL = reader.result as string;
                setImageData(dataURL);
                localStorage.setItem('imageData', dataURL);
            };

            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        const storedImageData = localStorage.getItem('imageData');
        if (storedImageData) {
            setImageData(storedImageData);
        }
    }, []);

    return (
        <div className="Add_Hotel_Main">
            <form className="Add_Hotel_Main_Wrap">
                <div className='InputMainLeft'>
                    <div className='InputDiv'>
                        <label>Hotel Image</label>
                        <div className='ImageInput'>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>
                    <div className='InputDiv'>
                        <label>Hotel Name</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Hotel Name'
                            onChange={handleTextChange}
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Address</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Address'
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Email</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Email Address'
                        />
                    </div>
                    <div className='InputDivLocation'>
                        <div className='InputLocation'>
                            <label>City</label>
                            <input
                                className='AddHotelInput'
                                placeholder='City'
                            />
                        </div>
                        <div className='InputLocation'>
                            <label>State</label>
                            <input
                                className='AddHotelInput'
                                placeholder='State'
                            />
                        </div>
                    </div>
                    <div className='InputDiv'>
                        <label>Website</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Website(optional)'
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Description</label>
                        <textarea name="Description" id="" className='InputDesc' placeholder='Hotel Description'></textarea>
                    </div>
                </div>
                <div className='InputMaiRight'>
                    {imageData && <img src={imageData} alt="Preview" className='Hotel_Image_Preview' />}
                    <div>
                    <p>Hotel Name: {textValue}</p>
                    <p>Address: {textValue}</p>
                    <p>Email: {textValue}</p>
                    <p>City: {textValue}</p>
                    <p>State: {textValue}</p>
                    <p>Website: {textValue}</p>
                    <p>Description: {textValue}</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddHotels