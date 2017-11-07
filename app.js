const express = require( 'express' );
const app = express();	


app.get('/', (req, res) => res.send('Hello World'))


app.get('/news', (req, res) => res.send('next msg'))
app.listen(3000, () => console.log("server listening"))