import express from 'express'
import playersController from '../../controllers/playerController.js'

const router = express.Router()

router.get('/', playersController.getAllPLayers)

router.get('/:playerId', playersController.getOnePlayer)

router.post('/', playersController.createNewPlayer)

router.put('/:playerId', playersController.updateOnePlayer)

router.delete('/', playersController.deleteAllPlayers)

router.delete('/:playerId', playersController.deleteOnePlayer)

export default router
