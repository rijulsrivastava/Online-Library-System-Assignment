import React from 'react'
import { MdHome } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';


// header will be displayed always except on the Error page
function Header() {
    return (
        <div className='border '>
            <nav className='flex justify-between items-center m-8 mt-6'>
                <div>
                    <h1 className='font-bold italic text-5xl  text-[#e6bc8f] mx-14 '> <span className=' text-[#e6bc8f] text-7xl '>B</span>ook Library</h1>
                </div>

                {/* below are the navigation links to link different pages */}
                <ul type='none' className='flex text-[#e6bc8f]'>
                    <div >
                        <Link to={'/'} className='flex justify-center items-center text-2xl  mx-5 gap-1 hover:text-3xl'>
                            <MdHome />
                            <li>Home</li>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/browseBook'} className='flex justify-center items-center text-2xl  mx-5 gap-1 hover:text-3xl'>
                            <IoSearchSharp />
                            <li>Browse Books</li>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/addBook'} className='flex justify-center items-center text-2xl  mx-5 gap-1 hover:text-3xl'>
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