import { useEffect, useState } from 'react';
import './Landing1.css'
import { FaSearch } from "react-icons/fa";
import React from 'react';
import Popular from '../Popular/PopularHotel';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Landing2 from '../Landing2/Landing2';
import Footer from '../Footer/Footer';
import Landing3 from '../Landing3/Landing3';
import Landing4 from '../Landing4/Landing4';

const Landing1: React.FC = () => {
    // const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    // const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

    // const handleCheckInChange = (date: Date | null) => {
    //     setCheckInDate(date);
    // };

    // const handleCheckOutChange = (date: Date | null) => {
    //     setCheckOutDate(date);
    // };
    const [scroll, setScroll] = useState<boolean>(false)

    useEffect(() => {
        function handleScroll() {
            window.scrollY >= 543 ? setScroll(true) : setScroll(false);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <div className="Landing1Main">
            <div className='Landing1MainWrap'>
                <h1 className='LandinHeadingText' >Welcome to my Room find the <br /> best hotel around you </h1>
                <div className={!scroll ? 'SearchInputWrap' : 'SearchInputWrap2'}  >
                    <div className='SearchInputDiv'>
                        <div className='SearchIcon'>
                            <FaSearch />
                        </div>
                        <input
                            type='search'
                            placeholder='Search hotel according to your location'
                            className='SearcHInputLanding1'
                        />
                    </div>
                    {/* <div>
                        <div>
                            <label>Check-In Date:</label>
                            <DatePicker selected={checkInDate} onChange={handleCheckInChange} />
                        </div>
                        <div>
                            <label>Check-Out Date:</label>
                            <DatePicker selected={checkOutDate} onChange={handleCheckOutChange} />
                        </div>
                    </div> */}
                    <button className='SearchBttn'>Find Hotel</button>
                </div>
            </div>
            <Popular />
            <Landing4/>
            <Landing3/>
            <Landing2/>
            <Footer/>
        </div>
    )
}

export default Landing1