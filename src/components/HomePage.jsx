import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BookList from './BookList'
import Category from './Category'

function HomePage() {

  const books = useSelector((store)=>store.book.items) // to get all books stored in redux store
  const filteredBooks = books.filter((book)=>book.isPopular==true) // to filter out the popular books from the store
  return (
    <div className='flex flex-col justify-center items-center p-8 m-8 text-[#e6bc8f]'>
      <h1 className='text-7xl font-bold mb-5 text-white'>Welcome to LMS</h1>
      <p className='mb-8'><i className=' text-[#e6bc8fac]'>"LMS is a libary management system that handles categories of books"</i></p>
      <h2 className='font-bold text-5xl mb-5 self-start'>Categories</h2>
      <div className='self-start flex mb-8'>
        <Category/>
      </div>
      <h2 className='text-3xl font-bold self-start mb-5'>Popular Books</h2>
      <div>
        {/* to display popular books on the home page */}
        <BookList books={filteredBooks}/>
      </div>
    </div>
  )
}

export default HomePage