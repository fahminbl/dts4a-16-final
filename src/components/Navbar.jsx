import React from 'react';
import { useState } from 'react';

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
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="shadow-md fixed top-0 left-0 w-full ">
                <div className="md:flex justify-between bg-white py-4 md:px-10 px-7">
                    <div className='font-bold text-2xl cursor-pointer flex items-center'>
                        <span className='mr-1 pt-2'>
                            <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="news" />
                        </span>
                    </div>
                    <div onClick={() => {
                        open === true ? setOpen(false) : setOpen(true)
                    }} className='md:hidden absolute right-8 top-8 cursor-pointer'>
                        {open === false ? (
                            <svg width={'30px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        ) : (
                            <svg width={'30px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
                        )}
                    </div>
                    <div>
                    </div>
                    <ul className={`md:flex md:items-center md:shadow-none sm:w-full sm:shadow-xl md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-28 ' : 'top-[-390px]'}`}>
                        {Links.map((link) => (
                            <li className='md:ml-8 text-xl md:my-0 my-7' onClick={link.handler} key={link.name}>
                                <a className='text-gray-800 hover:text-gray-400 duration-500' href={link.handler} >{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}