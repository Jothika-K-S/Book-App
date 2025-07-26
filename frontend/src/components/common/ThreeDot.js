import Settings from "./Options"

const ThreeDot = ({setShowOptions}) => {
    return(
        <div className='absolute right-[5px] top-[12px] cursor.pointer' onClick={() => setShowOptions((toggle) => !toggle)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical hover:text-orange-500" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
         </svg>
        </div>
    )
}

export default ThreeDot