const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

// Serving static files
app.use(express.static(path.join(__dirname+'/public/')))

// Main page
app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.use((req,res)=> {
  res.type('text/html')
  res.status(404)
  res.send('<h1>Not found</h1>')
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

	
