import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/bookSlice'
import { useNavigate } from 'react-router-dom'

function AddBook() {

  // useDispatch is used to add book to the store
  const dispatch = useDispatch()

  const [bookId, setBookId] = useState(31)
  const navigate = useNavigate()

  // useState is used to store state of the form
  const [formInput, setFormInput] = useState({
    title: "",
    author: "",
    coverImage: '',
    category: '',
    description: "",
    rating: '1',
    isPopular: false,
    id: bookId,
  })

  // These are the books categories
  const categories = ['Fiction', 'Non-Fiction', 'Technology', 'Science', 'Education', 'Fantasy']


  function handleSubmit(e) {
    e.preventDefault();

    // to validate if user input is valid link or not
    try {
      new URL(formInput.coverImage);
    } catch {
      alert("Please enter a valid image URL.");
      return;
    }
    const book = { ...formInput, id: bookId, pages: Math.floor(100 + Math.random() * 900) }
    // console.log(book)
    dispatch(addItem(book))
    setBookId((bookId) => bookId + 1)

    // this redirects to browseBook once book is added
    navigate('/browseBook')

  }


  return (
    <div className='w-full flex justify-center items-center  '>
      <div className='bg-[#e6bc8f]  w-[600px] rounded-2xl flex flex-col m-5  items-center'>
        <h2 className='font-bold mt-5 text-4xl text-white'>Add new book</h2>
        <form className='flex flex-col w-[100%] gap-4 p-8' onSubmit={handleSubmit}>
          <div className='flex flex-col w-[100%]'>
            <label htmlFor="title" className='font-bold text-lg'>Title of the book</label>
            <input id="title" required type="text" className='border min-w-fit rounded-md p-2' value={formInput.title} onChange={(e) => setFormInput({ ...formInput, title: e.target.value })} />
          </div>
          <div className='flex flex-col w-[100%]'>
            <label htmlFor="author" className='font-bold text-lg'>Author Name</label>
            <input id="author" required value={formInput.author} onChange={(e) => setFormInput({ ...formInput, author: e.target.value })} type="text" className='border rounded-md p-2' />
          </div>
          <div className='flex flex-col w-[100%]' >
            <label htmlFor="imageLink" className='font-bold text-lg'>Add link of cover image</label>
            <input id='imageLink' type="url" required value={formInput.coverImage} onChange={(e) => setFormInput({ ...formInput, coverImage: e.target.value })} className='border rounded-md p-2' />
          </div>
          <div className='flex flex-col w-[100%]'>
            <label htmlFor="category" className='font-bold text-lg'>Choose category</label>
            <select id="category" required value={formInput.category} onChange={(e) => setFormInput({ ...formInput, category: e.target.value })} className='border font-bold rounded-md p-2'>
              <option className='text-center' value={""}>Choose category</option>
              {categories.map((category) => <option className='text-center' value={category} key={category}>{category}</option>)}
            </select>
          </div>
          <div className='flex justify-between w-[100%]' >
            <p className='font-bold text-lg'>Is this book popular?</p>
            <div className='flex mr-10 gap-4'>
              <div className='flex gap-1'>
                <input id='yes' type="radio" required checked={formInput.isPopular === true} name='popular' value={true} onChange={(e) => setFormInput({ ...formInput, isPopular: true })} />
                <label htmlFor="yes" className='font-bold text-lg'>Yes</label>
              </div>
              <div className='flex gap-1'>
                <input id='no' type="radio" checked={formInput.isPopular === false} required onChange={(e) => setFormInput({ ...formInput, isPopular: false })} name='popular' value={false} />
                <label htmlFor="no" className='font-bold text-lg'>No</label>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[100%]'>
            <label htmlFor="description" className='font-bold text-lg'>Description of the book</label>
            <textarea id="description" required value={formInput.description} onChange={(e) => setFormInput({ ...formInput, description: e.target.value })} rows={4} className='border rounded-md p-2' />
          </div>

          <div className='flex flex-col w-[100%]'>
            <label htmlFor="rating" className='font-bold text-lg'>Rating: {formInput.rating}</label>
            <input id="rating" type="range" required onChange={(e) => setFormInput({ ...formInput, rating: e.target.value })} min="1" max="5" step="0.1" value={formInput.rating} className='border rounded-md ' />
          </div>

          <button type="submit" className='border self-center p-2 rounded-2xl text-[#e6bc8f] bg-[#24392f] w-[50%] text-center'>Add book</button>
        </form>
      </div>
    </div>
  )
}

export default AddBook