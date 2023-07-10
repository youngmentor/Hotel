import './Landing1.css'
import { FaSearch } from "react-icons/fa";
import React from 'react';
import Popular from '../Popular/PopularHotel';
const Landing1: React.FC = () => {


    return (
        <div className="Landing1Main">
            <div className='Landing1MainWrap'>
                <h1 className='LandinHeadingText' >Welcome to my room find the <br/> best hotel around you </h1>  
                <div className='SearchInputWrap'>
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
                    <button>Find Hotel</button>
                </div>
            </div>
            <Popular/>
        </div>
    )
}

export default Landing1