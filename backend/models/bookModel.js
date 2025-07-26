import mongoose from "mongoose";


const bookSchema = mongoose.Schema(
    {
        title: {
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true 
        },
        image:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        genre:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },    
        buy:{
            type:String,
            required:true
        }    
    }
)

export const bookModel = mongoose.model('Book', bookSchema)