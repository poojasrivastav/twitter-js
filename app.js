const express=require('express');
const app=express();


app.use('/',function(req, res, next){
	console.log("Get / ");
	next();
}, function(req, res, next){
	console.log('Get / is-anybody-in-there')
	next();
},function(req, res, next){
	console.log('Post /modernism')
	next()
})

app.use('/special/', function(req, res, next){
	console.log('Get / 200')
	next();
})

app.get('/special/', function(req, res, next){
	res.send('getting special')
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/news', (req, res) => res.send('hi there!'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))
