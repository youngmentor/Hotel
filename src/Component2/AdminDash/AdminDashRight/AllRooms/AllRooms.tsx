import RoomData from '../../../../component/LandingPage/HomeData'
import './AllRooms.css'
import React from 'react';
import Rating from 'react-rating-stars-component';
const AllRooms: React.FC = () => {
    const [rating, setRating] = React.useState<number>(0);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    return (
        <div className="AllHotels_Main">
            <div className="AllHotels_Main_Wrap">
                {
                    RoomData.map((i) => {
                        return (
                            <div className="AllHotels_Card">
                                <img src={i.Avatar} className='All_Hotels_Image' />
                                <div className='AddHotels-Detail'>
                                    <p>Hotel Name: {i.state} </p>
                                    <p>Hotel city: {i.city}</p>
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
export default AllRooms