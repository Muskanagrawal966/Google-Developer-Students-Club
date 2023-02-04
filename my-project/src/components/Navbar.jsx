import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between px-4 py-2 bg-gray-600'>
        <h1 className='text-2xl tracking-widest text-white'>MARKDOWN</h1>
        <div className="right flex text-white">
            <button className='bg-orange-600 p-2 mr-2 rounded-md hover:bg-orange-800'>Delete</button>
            <button className='bg-orange-600 p-2 rounded-md hover:bg-orange-800'>Download</button>
            <button className='bg-orange-600 p-2 rounded-md hover:bg-orange-800'>Save</button>
        </div>
    </div>
  )
}
export default NavBar;