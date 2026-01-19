import express from 'express'

const app = express()

app.use(express.json())

const posts = []


app.post('/posts' , (req, res) => {

    posts.push(req.body)

    res.status(201).json(req.body)
})

app.get('/posts', (req, res) => {

res.status(200).json(posts)

})


app.listen(3000)
