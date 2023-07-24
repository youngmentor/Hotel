import React, { useState, ChangeEvent, useEffect, } from 'react';
import './AddRooms.css'
const AddRooms: React.FC = () => {
    const [imageData, setImageData] = useState<string>('');
    const [textValue1, setTextValue1] = useState<string>('');
    const [textValue2, setTextValue2] = useState<string>('');
    const [textValue7, setTextValue7] = useState<string>('');

    const handleText1Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue1(value);
    };
    const handleText2Change = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTextValue2(value);
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
                        <label>Hotel Name</label>
                        <div className='ImageInput'>
                            <select>
                                <option>Ex</option>
                            </select>
                        </div>
                    </div>
                    <div className='InputDiv'>
                        <label>Room Image</label>
                        <div className='ImageInput'>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>
                    <div className='InputDiv'>
                        <label>Room Number</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Hotel Number'
                            onChange={handleText1Change}
                            type='number'
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Room Price</label>
                        <input
                            className='AddHotelInput'
                            placeholder='Price'
                            onChange={handleText2Change}
                            type='number'
                        />
                    </div>
                    <div className='InputDiv'>
                        <label>Room Description</label>
                        <textarea name="Description"
                            className='InputDesc'
                            placeholder='Hotel Description'
                            onChange={handleText7Change}
                            rows={4}
                            cols={30}
                        />
                    </div>
                    <button className='Add_Hotel_Bttn'>Add Hotel</button>
                </div>
                <div className='InputMaiRight'>
                    <div className='ImagePreviewDiv'>
                        {imageData && <img src={imageData} alt="Preview" className='Hotel_Image_Preview' />}
                    </div>
                    <div className='InputPreview'>
                        <p className='Name'>Room Number: {textValue1}</p>
                        <p className='Name'>Room Price: ${textValue2}</p>
                        <p className='description'>Room Description: {textValue7}</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddRooms