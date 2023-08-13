import { useQuery } from '@tanstack/react-query';
// import RoomData from '../../../../component/LandingPage/HomeData'
import './AllHotels.css'
import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
import { getAllHotel } from '../../../../component/APIS/query';
const AllHotels = (props: {value: any}) => {
    const [rating, setRating] = React.useState<number>(0);
    const [hotels, setHotels] = useState([]); 
    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };
    const { } = useQuery(["getHotel", props?.value], getAllHotel, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            console.log(props?.value?.data.id)
            console.log(data)
            console.log(hotels)
            const hotelsArray = data?.data?.data?.hotels || [];
            setHotels(hotelsArray);
        },
      });
    return (
        <div className="AllHotels_Main">
            <div className="AllHotels_Main_Wrap">
                {
                    hotels?.map((i) => {
                        return (
                            <div className="AllHotels_Card">
                                <img src={i} className='All_Hotels_Image' />
                                <div className='AddHotels-Detail'>
                                    <p>Hotel State: {i} </p>
                                    <p>Hotel city: {i}</p>
                                    <div>
                                        <Rating
                                            count={5}
                                            value={rating}
                                            onChange={handleRatingChange}
                                            size={15}
                                            activeColor="rgb(45, 185, 255)"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default AllHotels