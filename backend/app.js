const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()



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