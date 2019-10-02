const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.set('views', __dirname+'/views')

app.set('view engine', 'pug')

const PORT = process.env.PORT || 3000

// ---

app.get('/',(req,res)=>{
	res.render('index')
})

app.get('/speakers',(req,res)=>{
	res.render('speakers')
})

app.get('/events',(req,res)=>{
	res.render('events')
})

app.get('/about',(req,res)=>{
	res.render('about')
})

app.get('/schedule',(req,res)=>{
	res.render('schedule')
})

// ---

app.listen(PORT, err => {
	if (err) return console.error(err)

	console.log(`Server listening on port ${PORT}.`)
})
