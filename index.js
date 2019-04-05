const express = require('express')
const app = express()
const port = 4001

const customerGenerator = require('./routes/customerGenerator')

app.get('/', async (req, res) => {
  const customers = await customerGenerator()
  res.send(customers)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))