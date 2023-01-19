import express from 'express'
import playersController from '../../controllers/playerController.js'
import { pagination } from '../../middleware/pagination.js'

const router = express.Router()

router.get('/', pagination(), playersController.getAllPLayers)

/**
 * @openapi
 * /api/v1/players:
 *   get:
 *     tags:
 *       - Players
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The actual page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The number of players displayed on the page
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: number
 *                   example: 26
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *
 */

router.get('/:playerId', playersController.getOnePlayer)

/**
 * @openapi
 * /api/v1/players/{playerId}:
 *   get:
 *     tags:
 *       - Players
 *     parameters:
 *       - in: path
 *         name: playerId
 *         schema:
 *           type: string
 *         description: The ID of the player that I want to show
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */

router.post('/', playersController.createNewPlayer)

router.put('/:playerId', playersController.updateOnePlayer)

router.delete('/', playersController.deleteAllPlayers)

router.delete('/:playerId', playersController.deleteOnePlayer)

export default router
