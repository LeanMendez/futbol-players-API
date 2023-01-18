import playerService from '../services/playerService.js'

const getAllPLayers = async (req, res) => {
  try {
    const allPlayers = await playerService.getAllPLayers()
    res.status(200).json({ status: 'OK', data: allPlayers })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      errors: [{
        code: error.code,
        message: error.message
      }]
    })
  }
}

const getOnePlayer = async (req, res) => {
  try {
    const { playerId } = req.params
    const player = await playerService.getOnePlayer(playerId)
    res.status(200).json({ status: 'OK', data: player })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      errors: [{
        code: error.code,
        message: error.message
      }]
    })
  }
}

const createNewPlayer = (req, res) => {
  try {
    const { body } = req
    const newPlayer = {
      ...body
    }
    const createdPlayer = playerService.createNewPlayer(newPlayer)
    res.status(201).json({ status: 'OK', data: createdPlayer })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      errors: [{
        code: error.code,
        message: error.message
      }]
    })
  }
}

const updateOnePlayer = async (req, res) => {
  try {
    const { playerId } = req.params
    const { body } = req
    const updatedPlayer = await playerService.updateOnePlayer(playerId, body)
    res.json({ message: `Player with ID: ${playerId} has been updated`, data: updatedPlayer })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      errors: [{
        code: error.code,
        message: error.message
      }]
    })
  }
}

const deleteAllPlayers = async (req, res) => {
  try {
    await playerService.deleteAllPlayers()
    res.json({ message: 'All players has been deleted' })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      errors: [{
        code: error.code,
        message: error.message
      }]
    })
  }
}

const deleteOnePlayer = async (req, res) => {
  try {
    const { playerId } = req.params
    await playerService.deleteOnePlayer(playerId)
    res.json({ message: `Player with ID: ${playerId} has been deleted` })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      errors: [{
        code: error.code,
        message: error.message
      }]
    })
  }
}

export default {
  getAllPLayers,
  getOnePlayer,
  createNewPlayer,
  updateOnePlayer,
  deleteAllPlayers,
  deleteOnePlayer
}
