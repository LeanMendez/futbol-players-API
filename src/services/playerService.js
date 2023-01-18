import prisma from '../database/db.js'

const getAllPLayers = async () => {
  try {
    const allPlayers = await prisma.players.findMany()
    return allPlayers
  } catch (error) {
    throw new Error(error.message)
  }
}

const getOnePlayer = async (playerId) => {
  try {
    const player = await prisma.players.findUnique({ where: { id: playerId } })
    return player
  } catch (error) {
    throw new Error(error.message)
  }
}

const createNewPlayer = async (body) => {
  try {
    const newPlayer = {
      ...body
    }
    const createdPlayer = await prisma.players.create(newPlayer)
    return createdPlayer
  } catch (error) {
    throw new Error(error.message)
  }
}

const updateOnePlayer = async (playerId, body) => {
  try {
    const playerToBeUpdated = await prisma.players.findUnique({ where: { id: playerId } })
    if (!playerToBeUpdated) return
    const updatedPlayer = await prisma.players.update({
      where: { id: playerId },
      data: body
    })
    return updatedPlayer
  } catch (error) {
    throw new Error(error.message)
  }
}

const deleteAllPlayers = async () => {
  await prisma.players.deleteMany({})
}

const deleteOnePlayer = async (playerId) => {
  try {
    await prisma.players.delete({ where: { id: playerId } })
    return
  } catch (error) {
    throw new Error(error.message)
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
