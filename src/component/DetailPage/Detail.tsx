import { useParams } from "react-router-dom"
import { useState } from "react"
import { DatePickerInput } from '@mantine/dates';
import { useQuery } from '@tanstack/react-query'
import './Detail.css'
import { getOneRoom } from '../APIS/query'
const Detail: React.FC = () => {
  const { id } = useParams()
  const { data } = useQuery(['getoneroom', id], getOneRoom, {

  })
  //  console.log(data?.data?.data)
  const oneRoomDetail = data?.data?.data
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setValue(dates);
  };
  const checkInDate = value[0];
  const checkOutDate = value[1];
  const numberOfNights = checkInDate && checkOutDate
    ? Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  // Calculate the updated total price
  const nightlyPrice = oneRoomDetail?.price || 0; // Assuming you have the nightly price in your data
  const updatedTotalPrice = numberOfNights * nightlyPrice;
  return (
    <div className="DetailsMainPages">
      <div className="DetailsMainWrap">
        <div className="Deatails_Left_Page">
          <img src={oneRoomDetail?.image} className="DetailsImage" />
        </div>
        <div className="Deatails_Right_Page">
          <div className="DetailsDetails">
            <p>Room Description: {oneRoomDetail?.roomDescription}</p>
            <p>Availability: {oneRoomDetail?.booked ? "booked" : "Available"}</p>
            <p> Room Number: {oneRoomDetail?.roomNumber}</p>
            <p>Room Price: ${oneRoomDetail?.price}</p>
            <div className="DetailsDateSelector">
              <DatePickerInput
                type="range"
                label="Slect a stay dates range"
                placeholder="Pick dates range"
                value={value}
                onChange={handleDateChange}
                // mx="auto"
                maw={260}
              />
            </div>
            <div className="DetailsPaymentInfo1">
              <p>Total Price: ${updatedTotalPrice}</p>
              <button className="DetailMinusBttn" >pay</button>
            </div>
          </div>
          <div className="DetailsPaymentInfo2">
            <p>Total Price: ${updatedTotalPrice}</p>
            <button className="DetailMinusBttn" >pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail