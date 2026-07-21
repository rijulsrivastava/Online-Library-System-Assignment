import React from 'react'
import { Link } from 'react-router-dom'

function Category() {

    const categories = ['Fiction', 'Non-Fiction', 'Technology', 'Science', 'Education', 'Fantasy']

    return (
        // this will show all the book present in the store
        <div className='flex'>
            <Link to={'/browseBook'} className='border m-2 p-2 rounded-2xl bg-[#e6bc8f] text-white border-[#e6bc8f] hover:scale-110'>All Books</Link>
            
            {/* this will show all the book of a particular category that is selected */}
            {categories.map((category) => {
                return (
            <ol key={category} className=' border m-2 p-2 rounded-2xl hover:scale-110'>
                <Link to={`/book/${category}`}>
                    <li>{category}</li>
                </Link>
            </ol>
            )
            })}
        </div>
    )
}

export default Category