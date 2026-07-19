import React from 'react'
import { MdHome } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='border'>
            <nav className='flex justify-between items-center m-8'>
                <div>
                    <h1 className='font-bold text-4xl'>Book Library</h1>
                </div>
                <ul type='none' className='flex'>
                    <div className='flex mx-4'>
                        <Link to={'/'}>
                            <MdHome />
                            <li>Home</li>
                        </Link>
                    </div>
                    <div className='flex mx-4'>
                        <Link to={'/browseBook'}>
                            <IoSearchSharp />
                            <li>Browse Books</li>
                        </Link>
                    </div>
                    <div className='flex mx-4'>
                        <Link to={'/addBook'}>
                            <BiSolidBookAdd />
                            <li>Add Book</li>
                        </Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header