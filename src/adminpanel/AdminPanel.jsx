import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import AdminComponents from './components/AdminComponents'

const AdminPanel = () => {
  return (
    <div className=' flex'>
        <div className='w-[17%] px-3 '>
        <AdminSidebar />
        </div>
       
        <div className='w-full '>
            <div className=''>
            <AdminNavbar />
            </div>
        <div className='bg-gray-200 p-6'>
        <AdminComponents />
        </div>
       
        </div>
        
    </div>
  )
}

export default AdminPanel