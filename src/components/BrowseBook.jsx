import React, { useEffect, useState } from 'react'
import Category from './Category'
import BookList from './BookList'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function BrowseBook() {

    // useSelector is used to get books from the store
    const books = useSelector((store) => store.book.items)
    const [searchedText, setSearchedText] = useState('')
    const [filteredBooks, setFilteredBooks] = useState(books)

    // useParams is used to get choosen category from the url-section
    const { category } = useParams()

    // useEffect is used to filter books whenever any of [searchedText, category, books] is changed
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
        <div className='text-[#e6bc8f]'>
            <h2 className='font-bold text-5xl m-5 self-start'>Categories</h2>
            <div className='self-start flex m-8'>
                <Category setFilteredBooks={setFilteredBooks} />
            </div>
            <h2 className='font-bold text-5xl m-5 self-start'>Search Book</h2>
            <input type="text"  onChange={(e) => setSearchedText(e.target.value)} value={searchedText} placeholder='search book by title or author' className='border rounded-2xl w-5/12 text-center py-2 font-bold m-8 mt-5 self-start ' />
            {/* to reflect changes of filtered book below is used */}
            <BookList books={filteredBooks} />
        </div>
    )
}

export default BrowseBook