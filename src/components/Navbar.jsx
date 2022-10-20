import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar() {
    const Links = [
        {
            name: "Logout",
            handler: "#"
        },
        {
            name: "Dashboard",
            handler: "#"
        },
    ]
    return (
        <>
            <div className="shadow-md fixed top-0 left-0 w-full ">
                <div className="md:flex justify-between bg-white py-4 betww md:px-10 px-7">
                    <div className='font-bold text-2xl cursor-pointer flex items-center'>
                        <span className='mr-1 pt-2'>
                            <img className='w-14' src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="news" srcset="" />
                        </span>
                    </div>
                    <ul className='class="md:flex sm:m md:items-center'>
                        <span><FontAwesomeIcon icon="fa-solid fa-bars" /></span>
                        {Links.map((link) => (
                            <li className='md:ml-8 text-xl md:my-0 my-2' onClick={link.handler} key={link.name}>
                                <a href={link.handler} >{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}