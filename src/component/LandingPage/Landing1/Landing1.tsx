import { useEffect, useRef, useState } from 'react';
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
import { useMutation } from 'react-query';
// import axios from 'axios';
import { fetchSearchResults } from '../../APIS/Mutation';


const Landing1: React.FC = () => {
    const [scroll, setScroll] = useState<boolean>(false)
    useEffect(() => {
        function handleScroll() {
            window.scrollY >= 543 ? setScroll(true) : setScroll(false);
            // console.log(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);
    const inputRef = useRef<HTMLInputElement | null>(null)
    // const [searchValue, setSearchValue] = useState<string>('');

    const {
        data,
        error,
        isLoading,
        mutate
    } = useMutation( ["search"], fetchSearchResults, {
        onSuccess:() =>{
            // console.log(data?.data.data)
        }
    });
    // console.log (typeof inputRef.current?.value)
    useEffect(()=>{
        // console.log(error)
        // console.log(isLoading)
    })
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
                            type='text'
                            placeholder='Search hotel according to your location'
                            className='SearcHInputLanding1'
                            // value={inputRef.current?.value}
                            ref={inputRef}
                        />
                    </div>
                    <button className='SearchBttn' onClick={()=>mutate(inputRef.current?.value)}>Find Hotel</button>  
                </div>
            </div>
            <div>
                {isLoading && <div>Loading...</div>}

                {error ? <div>Error</div> : null}
                {
                    data?.data.data.map((result:any) => (
                        <div key={result.id}>
                            <p>{result.hotelName}</p>
                            <p>{result.address}</p>
                            <p>{result.city}</p>
                            <p>{result.state}</p>
                        </div>
                    ))
                }
            </div>
            <Popular />
            <Landing4 />
            <Landing3 />
            <Landing5 />
            <Landing6 />
            <Landing2 />
            <Footer />
        </div>
    )
}

export default Landing1