import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Category() {

    const categories = ['Fiction', 'Non-Fiction', 'Technology', 'Science', 'Education', 'Fantasy']

    return (
        categories.map((category) => {
            return (
                <ol key={category} className=' border m-2 p-2 rounded-2xl '>
                    <Link to={`/book/${category}`}>
                        <li>{category}</li>
                    </Link>
                </ol>
            )
        })
    )
}

export default Category