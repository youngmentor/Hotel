// const { VITE_ENDPOINT } = import.meta.env;
// import { useEffect } from 'react'
// import { io } from 'socket.io-client';
import { getOneAdminBookings } from '../../../../component/APIS/query'
import './AdminNotification.css'
import { useQuery } from '@tanstack/react-query'
const AdminNotification = ({ value }: { value: any }) => {
  // const socket = io(`${VITE_ENDPOINT}`);
  const { data } = useQuery(['getOneAdminBookings', value?.id], getOneAdminBookings, {
    onSuccess: () => {
    }
  })
  const message = data?.data?.data
  // console.log(BookingsData?.data?.data?.[0].adminMessage)
  // useEffect(() => {
  //   socket.on('Booked notification', (data) => {
  //     console.log('Received message:', data);
  //   });
  //   return () => {
  //     socket.disconnect();
  //   }
  // }, [])
  return (
    <div className='AdminNotificationMain'>
      {
        message?.map((i: any) => (
          <ul key={i?.id}>
            <li>{i?.adminMessage}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default AdminNotification