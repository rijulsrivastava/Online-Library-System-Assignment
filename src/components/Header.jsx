import React from 'react'
import { MdHome } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";

function Header() {
    return (
        <div className='border'>
            <nav className='flex justify-between items-center m-8'>
                <div>
                    <h1 className='font-bold text-4xl'>Book Library</h1>
                </div>
                <ul type='none' className='flex'>
                    <div className='flex mx-4'>
                        <MdHome/>
                        <li>Home</li>
                    </div>
                    <div className='flex mx-4'>
                        <IoSearchSharp/>
                        <li>Browse Books</li>
                    </div>
                    <div className='flex mx-4'>
                        <BiSolidBookAdd/>
                        <li>Add Book</li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header