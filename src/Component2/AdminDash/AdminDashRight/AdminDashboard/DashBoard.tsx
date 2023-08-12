import { useState } from 'react';
import UserData from './BookingData'
import './DashBoard.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const DashBoard = () => {
    const [date, setDate] = useState(new Date());
    
    const handleDateChange = (date: Date | Date[]) => {
        if (Array.isArray(date)) {
            // Handle multiple dates if necessary
        } else {
            setDate(date);
        }
    };

    return (
        <div className="DashBoardMain_Dashboard">
            <div className='DashBoardMain_Dashboard_Wrap'>
                <div className='All_All_Div'>
                    <div className='AllHotel-Div'>
                        <b>123</b>
                        <p>Hotel</p>
                    </div>
                    <div className='AllHotel-Div'>
                        <b>247</b>
                        <p>Rooms</p>
                    </div>
                    <div className='AllHotel-Div'>
                        <b>555</b>
                        <p>Customers</p>
                    </div>
                    <div className='AllHotel-Div'>
                        <b>123</b>
                        <p>Bookings</p>
                    </div>
                </div>
                <div className='All_User' >
                    <h3>All Bookings</h3>
                    <div className='AllUser_Calender_Wrap'>
                        <div className='All_User_Booking'>
                            <div className='AllUser_Specific'>
                                <div className='AllUser_Specific_Wrap'>
                                    <p>Id</p>
                                    <p>Name</p>
                                    <p>Room No</p>
                                    <p>Date From</p>
                                    <p>Date To</p>
                                </div>
                            </div>
                            <div className='All_User_Booking_Wrap'>
                                {
                                    UserData.map((i) => (
                                        <div key={i.id} className='AllUser_Info'>
                                            <p>{i.id}</p>
                                            <p>{i.name}</p>
                                            <p>{i.roomNo}</p>
                                            <p>{i.dateFrom}</p>
                                            <p>{i.dateTo}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="calendar-container">
                            <Calendar value={date} onChange={handleDateChange as any} className="calender"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard