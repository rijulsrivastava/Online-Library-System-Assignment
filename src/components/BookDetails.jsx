import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

function BookDetails() {

    // useParams is used to get id  for detailed view of the book
    const param = useParams()

    // useSelector to get book data from store
    const books = useSelector((store) => store.book.items)

    // to filter book of particular book id
    const filteredBook = books.filter((book) => book.id == param.id)

    return (
        <div className='flex justify-center items-center m-8 '>
            <div className='border rounded-2xl px-3 py-1 m-3 text-[#e6bc8f] bg-[#24392f]'>
                <Link to={'/browseBook'} className='flex justify-center items-center gap-1 '>
                    <IoArrowBack />
                    <p>Back</p>
                </Link>
            </div>

            {/* below will show the details of a particular book */}
            {filteredBook.map((book) => {
                return (
                    <div key={book.id} className='flex flex-col justify-center items-center rounded-2xl border bg-[#e6bc8f]'>
                        <div className="flex justify-center items-center gap-2 p-2 w-[800px] h-[500px] rounded-2xl ">
                            <div className="relative w-[45%] h-[100%] rounded-2xl overflow-hidden ">
                                <div className="relative flex flex-col justify-between items-center z-10  h-[100%] ">
                                    <h2 className='text-3xl text-center font-bold p-2 bg-[#e6bc8f80] '>{book.title}</h2>
                                    <p className='text-[#24392f] p-1 px-2 font-bold bg-[#e6bc8f] text-lg rounded-r-lg self-start'>Ratings:{book.rating}</p>
                                    <div className='flex flex-col h-[70px] justify-between w-[100%]'>
                                        <h2 className='self-end  rounded-l-lg px-2 text-[#24392f] w-fit font-bold p-1 pr-2 bg-[#e6bc8f] text-xs '>{book.category}</h2>
                                    <h3 className=' bg-[#e6bc8f80] w-[100%] font-bold text-center p-1'>written by {book.author}</h3>
                                    </div>
                                </div>
                                <img src={book.coverImage} alt="" className='h-[100%] w-[100%] absolute top-0' />
                            </div>
                            <div className="w-[55%] h-[100%] flex flex-col justify-between bg-[#24392f] rounded-2xl">
                                <h2 className='text-center font-bold p-1 text-xl border-b text-[#e6bc8f]'>Description</h2>
                                <p className=" flex justify-center items-center text-justify py-2 px-6 text-[#e6bc8f]">{book.description}</p>
                               <div className='flex justify-center px-4 p-1 border-t text-[#e6bc8f]'>
                                <h2 className='text-center font-bold p-1  text-xs '>pages : {book.pages}</h2> 
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