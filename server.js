import express from 'express'

const app = express()

app.use(express.json())

const posts = []


app.post('/posts' , (req, res) => {

    posts.push(req.body)

    res.send('Ok post')
})

app.get('/posts', (req, res) => {

res.json(posts)

})


app.listen(3000)
