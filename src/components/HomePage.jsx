import React from 'react'
import { useSelector } from 'react-redux'
import BookList from './BookList'

function HomePage() {

  const books = useSelector((store)=>store.book.items)

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
        <BookList/>
      </div>
    </div>
  )
}

export default HomePage