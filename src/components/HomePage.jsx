import React from 'react'
import { Books } from '../utils/dummyData'

function HomePage() {
  return (
    <div className='m-8'>
      <h1 className='text-4xl font-bold'>Welcome to LMS</h1>
      <p><i>"LMS a libary management system that handles categories of books"</i></p>
      <h2 className='font-bold text-3xl'>Categories</h2>
      <div>
        <button className='border m-3 p-2 rounded-xl w-[150px] text-lg font-bold'>Fiction</button>
        <button className='border m-3 p-2 rounded-xl w-[150px] text-lg font-bold'>Non-Fiction</button>
        <button className='border m-3 p-2 rounded-xl w-[150px] text-lg font-bold'>Sci-Fi</button>
      </div>
      <h2 className='text-3xl font-bold'>Popular Books</h2>
      <div>
        {Books.map((book)=>{
          return(
            <>
            <h3>{book.title}</h3>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            <br />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage