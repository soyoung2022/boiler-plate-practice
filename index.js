const express = require('express')
const app = express()
const port = 5000;
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://annaYoun:soyoung927@boilerplate.lip5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World 우와 첫 익스프레스 노드!!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))