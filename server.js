const express = require('express')
const app = express()

app.use(express.json())

const seriesRoutes = require('./routes/seriesRoutes')
app.use('/api/series', seriesRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

