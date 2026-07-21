import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

function Error() {

    // useRouteError provides error details that occurs
    const err = useRouteError();
    console.log(err)
    return (
        <div className='flex justify-center items-center h-[100vh] bg-[#e6bc8f]'>
            <div className='border p-6 rounded-2xl flex flex-col justify-between items-center h-[350px] text-[#e6bc8f] bg-[#24392f]'>
                <div className='flex flex-col justify-between h-[75%] items-center'>
                    <div className='flex flex-col items-center gap-8'>
                        <h1 className='font-bold text-5xl'>Oops...!</h1>
                        <h1 className='text-3xl'>{err.status} - Page {err.statusText}</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='italic'>{err.data}</h2>
                        <p>Check the Url</p>
                    </div>
                </div>

                {/* below link is to go back to home page */}
                <Link to="/" className='border flex font-bold justify-center bg-[#0A1828] items-center rounded-2xl py-1 px-2 hover:scale-105'>
                    <IoArrowBack />
                    <p>Back to Home</p>
                </Link>
            </div>
        </div>
    )
}

export default Error;