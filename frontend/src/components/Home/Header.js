import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className='grid grid-cols-2 shadow-md'>
           <div className='pl-10'>
             <img src="https://www.shutterstock.com/image-photo/stack-books-isolated-on-white-600nw-2317754103.jpg" className='w-[8rem]'/>
           </div>
            <ul className='flex justify-end items-center gap-15 pr-18'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="orange" className="bi bi-bookmark-heart-fill cursor-pointer" viewBox="0 0 16 16">
                            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                        </svg>
                    </li>
                    <li>
                       <Link to={'/books/create'}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="orange" className="bi bi-plus-circle-fill cursor-pointer" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                       </Link>
                    </li>
                </ul>
        </header>
    )
}

export default Header