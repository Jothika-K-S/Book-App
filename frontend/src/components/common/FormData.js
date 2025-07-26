import { useEffect, useState } from "react"
import axios from 'axios';
import Button from "./Button";
import { useNavigate, useParams } from "react-router";

const FormData = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')
    const [buyNow, setBuyNow] = useState('')
    const [rating, setRating] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const updateBook = async() => {
        try{
            if(id){
                const editBook = await fetch(`http://localhost:3500/api/books/${id}`)
                const {title, author,description,image,genre,rating,buy} = await editBook.json()
                setTitle(title)
                setAuthor(author)
                setImage(image)
                setDescription(description)
                setGenre(genre)
                setRating(rating)
                setBuyNow(buy)
            }

        }catch(err){
            console.log(err)
        }
    }
    updateBook()
    },[])
    
    const handleCreateClick = async() => {
           const bookData = {
            "title": title,
            "author":author,
            "image":image,
            "description":description,
            "genre":genre,
            "rating":rating,
            "buy":buyNow
        }
       try{
        if(id){
           return axios.put(`http://localhost:3500/api/books/${id}`, bookData)
        }
        return axios.post('http://localhost:3500/api/books', bookData)
        navigate('/')
       }catch(err){
        console.log(err)
       }
    }
    
    return(
    <>
       <div className='grid grid-cols-2 gap-x-10'>
            <input type="text" value={title} className='border rounded-md py-3 px-5 w-full' placeholder='Book Title' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" name="author" value={author} className='border  rounded-md py-3 px-5 w-full' placeholder='Author' onChange={(e) => setAuthor(e?.target?.value)} />
       </div>
       <input type="text" name='image' value={image} className='border  rounded-md py-3 px-5 w-full ' placeholder='Image Link' onChange={(e) => setImage(e.target.value)} />
       <textarea name="description" id="description" value={description} className='border  rounded-md py-3 px-5 w-full ' placeholder='Description' rows={5} onChange={(e) => setDescription(e.target.value)}></textarea >
       <div className='grid grid-cols-2 gap-x-10'>
            <input type="text" name="genre" value={genre} className='border rounded-md py-3 px-5 w-full' placeholder='Genre' onChange={(e) => setGenre(e.target.value)}/>
            <input type="text" name="rating" value={rating} className='border rounded-md py-3 px-5 w-full' placeholder='Rating' onChange={(e) => setRating(e.target.value)}/>
       </div>
        <input type="text" name='buy now' value={buyNow} className='border  rounded-md py-3 px-5 w-full ' placeholder='Buy Now Link' onChange={(e) => setBuyNow(e.target.value)} />
        <Button  handleCreateClick={handleCreateClick} />
        </>
    )
}

export default FormData