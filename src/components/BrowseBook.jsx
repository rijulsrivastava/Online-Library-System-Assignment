import React, { useEffect, useState } from 'react'
import Category from './Category'
import BookList from './BookList'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function BrowseBook() {

    const books = useSelector((store) => store.book.items)
    const [searchedText, setSearchedText] = useState('')
    const [filteredBooks, setFilteredBooks] = useState(books)

    const { category } = useParams()

    useEffect(() => {

        let temp = books

        if (category) {
            temp = temp.filter((book) => book.category == category)
        }
        if (searchedText) {
            temp = temp.filter((book) => {
                return book.title.toLowerCase().includes(searchedText.toLowerCase()) || book.author.toLowerCase().includes(searchedText.toLowerCase())
            })
        }
        setFilteredBooks(temp)

    }, [searchedText, category, books])



    return (
        <div>
            <h2 className='font-bold text-3xl'>Categories</h2>
            <div className='flex'>
                <Category setFilteredBooks={setFilteredBooks} />
            </div>
            <h2 className='font-bold text-lg'>Search Book</h2>
            <input type="text" onChange={(e) => setSearchedText(e.target.value)} value={searchedText} placeholder='search book by title or author' className='border mx-8 my-2 w-5/12 p-2' />
            <BookList books={filteredBooks} />
        </div>
    )
}

export default BrowseBook