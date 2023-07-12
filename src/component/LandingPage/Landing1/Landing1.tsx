import { useEffect, useState } from 'react';
import './Landing1.css'
import { FaSearch } from "react-icons/fa";
import React from 'react';
import Popular from '../Popular/PopularHotel';

const Landing1: React.FC = () => {

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
                    <button className='SearchBttn'>Find Hotel</button>
                </div>
            </div>
            <Popular />
        </div>
    )
}

export default Landing1