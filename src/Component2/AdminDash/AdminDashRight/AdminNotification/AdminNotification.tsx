import { useEffect } from 'react'
import { getOneAdminBookings } from '../../../../component/APIS/query'
import './AdminNotification.css'
import { useQuery } from '@tanstack/react-query'
const AdminNotification = ({ value }: { value: any }) => {
  const { data } = useQuery(['getOneAdminBookings', value?.id], getOneAdminBookings, {
    onSuccess: () => {
    }
  })
  const message = data?.data?.data
  // console.log(BookingsData?.data?.data?.[0].adminMessage)
  useEffect(() => {

  }, [data])
  return (
    <div className='AdminNotificationMain'>
      {
        message?.map((i: any) => (
          <ul key={i?.id}>
            <li>{i?.adminMessage?.slice(0,32)}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default AdminNotification