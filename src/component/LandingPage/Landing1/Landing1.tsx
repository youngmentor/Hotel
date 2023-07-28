import { useEffect, useState } from 'react';
import './Landing1.css'
import { FaSearch } from "react-icons/fa";
import React from 'react';
import Popular from '../Popular/PopularHotel';
import Landing2 from '../Landing2/Landing2';
import Footer from '../Footer/Footer';
import Landing3 from '../Landing3/Landing3';
import Landing4 from '../Landing4/Landing4';
import Landing5 from '../Landing5/Landing5';
import Landing6 from '../Landing6/Landing6';

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
                <h1 className='LandinHeadingText' >Welcome to Room find the <br /> best hotel around you </h1>
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
            <Landing4/>
            <Landing3/>
            <Landing5/>
            <Landing6/>
            <Landing2/>
            <Footer/>
        </div>
    )
}

export default Landing1