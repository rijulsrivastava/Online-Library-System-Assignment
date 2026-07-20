import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addItem } from '../utils/bookSlice'
import {useNavigate} from 'react-router-dom'

function AddBook() {

  const dispatch = useDispatch()

  const [bookId, setBookId] = useState(31)
  const navigate = useNavigate()
  const [formInput, setFormInput] = useState({
    title: "",
    author: "",
    coverImage: '',
    category: '',
    description: "",
    rating: '',
    isPopular: false,
    id: bookId,
  })

  const categories = ['Fiction', 'Non-Fiction', 'Technology', 'Science', 'Education', 'Fantasy']


  function handleSubmit(e) {
     e.preventDefault();
     const book ={...formInput, id:bookId, pages:Math.floor(100 + Math.random() * 900)}
     console.log(book)
     dispatch(addItem(book))
     setBookId((bookId)=>bookId+1)
     navigate('/browseBook')
     
  }


  return (
    <div>
      <h2 className='font-bold'>Add new book</h2>
      <form className='flex flex-col gap-4 p-8' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title of the book</label>
          <input id="title" type="text" className='border' onChange={(e)=>setFormInput({...formInput, title:e.target.value})} />
        </div>
        <div >
          <label htmlFor="author">Author Name</label>
          <input id="author" onChange={(e)=>setFormInput({...formInput, author:e.target.value})} type="text" className='border' />
        </div>
        <div>
          <label htmlFor="imageLink">Add link of cover image</label>
          <input id='imageLink' type="url" onChange={(e)=>setFormInput({...formInput, coverImage:e.target.value})} className='border' />
        </div>
        <div>
          <label htmlFor="category">Choose category</label>
          <select id="category" onChange={(e)=>setFormInput({...formInput, category:e.target.value})} className='border'>
            <option>Choose category</option>
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </div>
        <div>
          <p>Is this book popular?</p>
          <input id='yes' type="radio" name='popular' value={true} onChange={(e) => setFormInput({...formInput, isPopular:true})}/>
          <label htmlFor="yes">Yes</label>
          <input id='no' type="radio" onChange={(e) => setFormInput({...formInput, isPopular:false})} name='popular' value={false}/>
          <label htmlFor="no">No</label>
        </div>

        <div>
          <label htmlFor="description">Description of the book</label>
          <textarea id="description" onChange={(e)=>setFormInput({...formInput, description:e.target.value})} rows={4} className='border' />
        </div>

        <div>
          <label htmlFor="rating">Rating:{formInput.rating}</label>
          <input id="rating" type="range" onChange={(e) => setFormInput({...formInput, rating:e.target.value})} min="1" max="5" step="0.1" value={formInput.rating} className='border' />
        </div>

        <button type="submit" className='border'>Add book</button>
      </form>
    </div>
  )
}

export default AddBook