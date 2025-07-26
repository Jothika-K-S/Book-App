import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Button from "../common/Button"
import axios, { Axios } from "axios"

const DeletePopUp = () => {
    const [image, setImage] = useState()
    const {id} = useParams()
    const navigate = useNavigate()

    const handleDeleteBook = async() => {
        try {
        axios.delete(`http://localhost:3500/api/books/${id}`)
        navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=> {
        const fetchBook = async() => {
            const getBookImage = await fetch(`http://localhost:3500/api/books/${id}`)
            const {image} = await getBookImage.json()
            setImage(image)
        }
        fetchBook()
    },[])

    return(
        <div className="rounded-lg shadow shadow-lg w-1/3 mx-auto mt-8 p-7">
            <h1 className="flex justify-center text-2xl font-bold">Are you sure to delete this book?</h1>
            <img src={image} className="w-60 mt-7 mx-auto"/>
            <ul className="flex justify-center gap-x-15 mt-8">
                <li>
                    <button className="px-16 py-3 bg-red-500 text-white rounded-[0.5rem] hover:bg-red-400 cursor-pointer">No</button>
                </li>
                <li>
                    <button className="px-16 py-3 bg-green-500 text-white rounded-[0.5rem] hover:bg-green-400 cursor-pointer" onClick={handleDeleteBook}>Yes</button>
                </li>
            </ul>
        </div>
    )
}

export default DeletePopUp