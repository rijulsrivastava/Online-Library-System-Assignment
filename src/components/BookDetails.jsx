import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

function BookDetails() {

    const param = useParams()

    const books = useSelector((store) => store.book.items)

    const filteredBook = books.filter((book) => book.id == param.id)

    return (
        <div className='flex justify-center items-center m-8'>
            <div className='border rounded-2xl px-2 py-1 m-3'>
                <Link to={'/browseBook'} className='flex justify-center items-center gap-1'>
                    <IoArrowBack />
                    <p>Back</p>
                </Link>
            </div>
            {filteredBook.map((book) => {
                return (
                    <div key={book.id} className='flex flex-col justify-center items-center rounded-2xl border'>
                        <div className="flex justify-center items-center gap-4 p-8 w-[800px] h-[500px]">
                            <div className="border w-[45%] h-[100%]">
                                <img src={book.coverImage} alt="" className='h-[100%] w-[100%]' />
                            </div>
                            <div className="w-[55%] h-[100%] border flex flex-col justify-between">
                                <div className="bg-black/20 py-2 px-6">
                                    <h2 >{book.title}</h2>
                                    <h3>written by {book.author}</h3>
                                </div>
                                <p className="bg-black/20 py-2 px-6">{book.description}</p>
                                <div className="flex flex-col items-center justify-around bg-black/20 py-2 px-6">
                                    <p>Ratings:{book.rating}</p>
                                    <h2>{book.category}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookDetails