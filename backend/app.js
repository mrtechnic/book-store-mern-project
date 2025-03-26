const express = require('express')
const app = express()
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config()

//middlewarw
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173/'],
  credentials: true
}))

//routes
const bookRoutes = require('./src/books/book.route')
app.use('/api/books', bookRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get('/', (req, res) => {
    res.send('Hello World!!')
  })
}

main().then(() => console.log('Mongodb connected successfully')).catch(err => console.log(err));

app.listen(5000, () => {
  console.log('Book Server is listening on port 5000!')
})