import express from 'express'

const v1Router = express.Router()

v1Router.get('/', (req, res) => {
  res.send('ACA SALEN LOS PLAYERS')
})

v1Router.get('/playerId', (req, res) => {
  res.send('UN SOLO PLAYER')
})

v1Router.post('/', (req, res) => {

})
export { v1Router }
