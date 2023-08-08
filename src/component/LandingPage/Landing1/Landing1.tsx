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
import { useMutation } from 'react-query';
import axios from 'axios';

interface SearchResult {
    id: number;
    hotelName: string;
    description: string;
    address: string;
    city: string;
    state: string;
    imageId: string;
}
const fetchSearchResults = async (searchTerm: string): Promise<SearchResult[]> => {
    const response = await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/hotel/search`, { query: searchTerm });
    return response.data;
};
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

    const [searchTerm, setSearchTerm] = useState<string>('');

    const searchMutation = useMutation((newSearchTerm: string) => fetchSearchResults(newSearchTerm));

    const handleSearch = () => {
        console.log('clicked')
        searchMutation.mutate(searchTerm);
    };


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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className='SearchBttn' onClick={handleSearch}>Find Hotel</button>
                </div>
            </div>
            <div>
                {searchMutation.isLoading && <div>Loading...</div>}

                {searchMutation.isError && <div>Error</div>}
                {
                    searchMutation.isSuccess &&
                    searchMutation?.data?.map((result) => (
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