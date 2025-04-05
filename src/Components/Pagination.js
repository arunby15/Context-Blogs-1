import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

  const { page, handlerPageChange, totalPages } = useContext(AppContext)

  return (
    <div className=' fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-b-gray-300 drop-shadow-md w-full flex justify-center items-center'>
      <div className='flex justify-between gap-x-3 w-11/12 max-w-2xl mx-auto py-2'>
      <div className='flex gap-x-2'>
      {
          page > 1 &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => handlerPageChange(page - 1)}>Previous</button>
        }
        {
          page < totalPages &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => handlerPageChange(page + 1)}>Next</button>
        }
      </div>
        

        <p className='text-sm font-semibold ml-auto'>page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination