import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import { MONGO_URL } from "./config.js"
import bookRoute from "./routes/bookRoute.js"
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(
    cors(
        {
            origin: 'http://localhost:1234/',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }
    )
)

app.use('/api/books',bookRoute)

mongoose.connect(MONGO_URL).then(() => {
    console.log('Database Connected Successfully!')
    app.listen(3500, () =>  {
    console.log(`Server is running on port 3500`)
})
}).catch((err) => console.log(err))

