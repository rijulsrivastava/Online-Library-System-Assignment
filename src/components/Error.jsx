import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

function Error() {

    const err = useRouteError();
    console.log(err)
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className='border p-10 rounded-2xl flex flex-col justify-center items-center '>
                <h1>Opps...!</h1>
                <h1>{err.status} - Page {err.statusText}</h1>
                <h2>{err.data}</h2>
                <p>Check your url</p>
                <Link to="/" className='border flex items-center rounded-2xl'>
                    <IoArrowBack />
                    <p>Back to Home</p>
                </Link>
            </div>
        </div>
    )
}

export default Error;