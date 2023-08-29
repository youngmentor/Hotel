const { VITE_TOKEN_USER, VITE_PAYMENT_KEY } = import.meta.env;
import { Params, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { useMutation, useQuery } from '@tanstack/react-query'
import './Detail.css'
import { bookRoom } from "../APIS/Mutation";
import { getOneRoom, getUser } from '../APIS/query'
import { Visitor } from "../APIS/TypeChecks";
import ButtonLoading from "../../ButtonLoader/ButtonLoader";
// import { ThemeContext } from "../ContextApi/ContextApi";
import Swal from "sweetalert2";

const Detail: React.FC = () => {
  const navigate = useNavigate()
  const { roomId } = useParams<Params>()
  const { data } = useQuery(['getoneroom', roomId], getOneRoom, {
  })

  const [visitorType, setVisitorType] = useState<Visitor>({
    adult: 0,
    children: 0,
    infant: 0,
  })
  const handleVisitorType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisitorType({
      ...visitorType,
      [e.target.name]: e.target.value
    });
  };
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const oneRoomDetail = data?.data?.data

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(new Date(e.target.value));
  };
  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDate(new Date(e.target.value));
  };
  const numberOfNights = checkInDate && checkOutDate
    ? Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const nightlyPrice = oneRoomDetail?.price || 0;
  const updatedTotalPrice = numberOfNights * nightlyPrice;

  const {
    data: userData,
  } = useQuery(["getuser"], getUser, {
    enabled: !!localStorage.getItem(VITE_TOKEN_USER),
    refetchOnWindowFocus: false,
    onSuccess: () => {
    },
    onError: () => {

    },
  });
  const userId: any = userData?.data?.data.id
  // console.log(userId)
  const { mutate, isLoading } = useMutation(['bookroom'], bookRoom, {
    onSuccess: (data) => {
      console.log(data)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data?.data?.data?.message,
        showConfirmButton: false,
        timer: 4000
      })
    },
    onError: (error: any) => {
      console.error(error);
      if (error?.response && error?.response?.data && error?.response?.data?.message) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
        });
      }
    },
  });
  const validateDateRange = () => {
    if (!checkInDate || !checkOutDate) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid date range',
        text: 'Please select both check-in and check-out dates.',
      });
      return false;
    }

    if (checkInDate >= checkOutDate) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid date range',
        text: 'Check-out date must be after check-in date.',
      });
      return false;
    }
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const checkInDateObject = new Date(checkInDate);
    checkInDateObject.setHours(0, 0, 0, 0);
    if (checkInDateObject < currentDate) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid date range',
        text: 'Check-in date must be on or after the current date.',
      });
      return false;
    }
    if (checkInDateObject > currentDate) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid date range',
        text: 'Check-in date must not be after the current date.',
      });
      return false;
    }
    if (checkOutDate == currentDate) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid date range',
        text: 'check out date must be after chek in date',
      });
      return false
    }
    return true;
  };
  const handleBookRoom = () => {
    console.log('clicked')
    if (checkInDate && checkOutDate) {
      const bookingData = {
        checkIn: checkInDate.toISOString().split('T')[0],
        checkOut: checkOutDate.toISOString().split('T')[0],
        price: updatedTotalPrice,
        adult: visitorType.adult,
        children: visitorType.children,
        infant: visitorType.infant
      };
      mutate({ bookingData, userId: userId, roomId: roomId });
      console.log(bookingData)
      console.log(roomId)
    }
  };
  const debounce = (fn: any, delay: any) => {
    let timer: any;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn()
      }, delay);
    }
  }
  const createBooking = debounce(handleBookRoom, 2000)

  function payKorapay() {
    if (!validateDateRange()) {
      return;
    }
    if (!userData?.data?.data) {
      Swal.fire({
        icon: 'info',
        title: "you need to log in to book a room",
        showConfirmButton: true,
      });
      setTimeout(() => {
        navigate('/alllogin/login')
      }, 4000)
      return;
    }
    let key = `key${Math.random()}`
    window.Korapay.initialize({
      key: VITE_PAYMENT_KEY,
      reference: key,
      amount: updatedTotalPrice,
      currency: "NGN",
      customer: {
        name: `${userData?.data?.data?.fullname}`,
        email: `${userData?.data?.data?.email}`,
      },
      onClose: function () {

      },
      onSuccess: function () {
        createBooking();
        navigate("/")

        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Please check your email for payment confirmation.',
          showConfirmButton: true,
        });
      },
      onFailed: function () {
      },
    });
  }
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
              <label>
                <p style={{ color: 'black' }}>Check-in Date</p>
                <input
                  type="date"
                  onChange={handleCheckInChange}
                  required
                />
              </label>
              <label>
                <p style={{ color: 'black' }}>Check-out Date</p>
                <input
                  type="date"
                  onChange={handleCheckOutChange}
                  required
                />
              </label>
            </div>
            <label>
              <p style={{ color: 'black' }}>Adult</p>
              <input
                type="number"
                placeholder="0"
                onChange={handleVisitorType}
                name="adult"
                value={visitorType.adult}
              />
            </label>
            <label>
              <p style={{ color: 'black' }}>children</p>
              <input
                type="number"
                placeholder="0"
                onChange={handleVisitorType}
                name="children"
                value={visitorType.children}
              />
            </label>
            <label>
              <p style={{ color: 'black' }}>infant</p>
              <input
                type="number"
                placeholder="0"
                onChange={handleVisitorType}
                name="infant"
                value={visitorType.infant}
              />
            </label>
            <div className="DetailsPaymentInfo1">
              <p>Total Price: ${updatedTotalPrice}</p>
              <button className="DetailMinusBttn" onClick={payKorapay}>pay</button>
            </div>
          </div>
          <div className="DetailsPaymentInfo2">
            <p>Total Price: ${updatedTotalPrice}</p>
            <button className="DetailMinusBttn" onClick={payKorapay}>{isLoading ? <ButtonLoading /> : 'pay'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail