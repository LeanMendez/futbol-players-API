import express from 'express'
import { v1Router } from './v1/routes/playerRoutes.js'

const app = express()
const PORT = process.env.PORT || 8080

// routes
app.use('/api/v1', v1Router)

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
