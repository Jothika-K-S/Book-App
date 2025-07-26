import { bookModel } from '../models/bookModel.js'


export const addBook = async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.image || !req.body.description || !req.body.genre || !req.body.rating || !req.body.buy){
            res.status(400).send({
                message:'Send All Required Fields!'
            })
        }

        const newBook = {
            title: req.body.title,
            image: req.body.image,
            author:req.body.author,
            description:req.body.description,
            genre:req.body.genre,
            rating:req.body.rating,
            buy:req.body.buy
        }

        const book = await bookModel.create(newBook)
        res.status(201).send(book)
    }catch(err){
        console.log(err.message)
        res.status(500).send({message:err.message})
    }
}

export const getBooks = async(req,res)=> {
    try{
        const books = await bookModel.find({})
        res.status(201).json({
            count:books.length,
            data: books
        })
        
    }catch(err){
        res.status(500).send({message:err.message})
    }
}

export const getSingleBook = async(req,res) => {
    try{
        const {id} = req.params
        const singleBook = await bookModel.findById(id)
        res.status(201).json(singleBook)
    }
    catch(err){
            res.status(500).send({message:err.message})
    }
}

export const updateBook = async(req,res)=>{
    try{
        const {id} = req.params;
        const updateBook = await bookModel.findByIdAndUpdate(id, req.body)
        if(!updateBook){
            res.status(404).json({message:'Book not found!'})
        }else{
            res.status(200).json({message:'Book Updated successfully!'})
        }
    }catch(err){
            res.status(500).send({message:err.message})
    }
}

export const deleteBook =  async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteBook = await bookModel.findByIdAndDelete(id)
        if(!deleteBook){
            res.status(404).json({message:'Book not found!'})
        }else{
            res.status(200).json({message:'Book Deleted successfully!'})
        }
    }catch(err){
            res.status(500).send({message:err.message})
    }
}