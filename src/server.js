import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

import router from './v1/routes/playerRoutes.js'
import { swaggerDocs as V1SwaggerDocs } from './v1/swagger.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 8080

console.log(__dirname + '/public')
app.use(express.static(path.join(__dirname + '/../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
  credentials: true
}))
app.options('*', cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept')
  next()
})

// routes
app.use('/api/v1/players', router)

app.listen(PORT, () => {
  console.log(`API running on port: ${PORT} and you can see the API on http://localhost:${PORT}/api/v1/`)
  V1SwaggerDocs(app, PORT)
})
