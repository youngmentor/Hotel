import React, { useState, ChangeEvent, useEffect, } from 'react';
import './AddHotels.css'
const AddHotels: React.FC = () => {
    const [imageData, setImageData] = useState<string>('');

    const [textValue1, setTextValue1] = useState<string>('');
    const [textValue2, setTextValue2] = useState<string>('');
    const [textValue3, setTextValue3] = useState<string>('');
    const [textValue4, setTextValue4] = useState<string>('');
    const [textValue5, setTextValue5] = useState<string>('');
    const [textValue6, setTextValue6] = useState<string>('');
    const [textValue7, setTextValue7] = useState<string>('');

    const handleText1Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue1(value);
    };
    const handleText2Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue2(value);
    };
    const handleText3Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue3(value);
    };
    const handleText4Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue4(value);
    };
    const handleText5Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue5(value);
    };
    const handleText6Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue6(value);
    };
    const handleText7Change = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const value = event.target.value;
        setTextValue7(value);
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
        };
        localStorage.setItem('textValue1', textValue1);
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
                            onChange={handleText1Change}
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Address</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Address'
                            onChange={handleText2Change}
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Email</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Email Address'
                            onChange={handleText3Change}
                        />
                    </div>
                    <div className='InputDivLocation'>
                        <div className='InputLocation'>
                            <label>City</label>
                            <input
                                className='AddHotelInput'
                                placeholder='City'
                                onChange={handleText4Change}
                            />
                        </div>
                        <div className='InputLocation'>
                            <label>State</label>
                            <input
                                className='AddHotelInput'
                                placeholder='State'
                                onChange={handleText5Change}
                            />
                        </div>
                    </div>
                    <div className='InputDiv'>
                        <label>Website</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Website(optional)'
                            onChange={handleText6Change}
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Description</label>
                        <textarea name="Description" 
                         className='InputDesc' 
                         placeholder='Hotel Description' 
                         onChange={handleText7Change} 
                         rows={4}
                         cols={30}
                         />
                    </div>
                </div>
                <div className='InputMaiRight'>
                    <div className='ImagePreviewDiv'>
                        {imageData && <img src={imageData} alt="Preview" className='Hotel_Image_Preview' />}
                    </div>
                    <div className='InputPreview'>
                        <p className='Name'>Hotel Name: {textValue1}</p>
                        <p className='Name'>Address: {textValue2}</p>
                        <p className='Name'>Email: {textValue3}</p>
                        <p className='Name'>City: {textValue4}</p>
                        <p className='Name'>State: {textValue5}</p>
                        <p className='Name'>Website: {textValue6}</p>
                        <p className='description'>Description: {textValue7}</p>
                    </div>
                     <button className='Add_Hotel_Bttn'>Add Hotel</button>
                </div>
            </form>
        </div>
    )
}
export default AddHotels