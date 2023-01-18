import express from 'express'
import cors from 'cors'
import router from './v1/routes/playerRoutes.js'

const app = express()
const PORT = process.env.PORT || 8080

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
  console.log(`API running on http://localhost:${PORT}`)
})
