import prisma from '../database/db.js'

export function pagination () {
  return async (req, res, next) => {
    const DEFAULT_PAGE = 1
    const DEFAULT_PAGE_SIZE = 60
    const page = req.query.page ? parseInt(req.query.page) : DEFAULT_PAGE
    const limit = req.query.limit ? parseInt(req.query.limit) : DEFAULT_PAGE_SIZE

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const data = {}

    if (endIndex < await prisma.players.count()) {
      data.next = {
        url: `http://localhost:8080/api/v1/players?page=${page + 1}&limit=${limit}`,
        page: page + 1,
        limit
      }
    }

    if (startIndex > 0) {
      data.previous = {
        url: `http://localhost:8080/api/v1/players?page=${page - 1}&limit=${limit}`,
        page: page - 1,
        limit
      }
    }
    try {
      data.data = await prisma.players.findMany({
        skip: startIndex,
        take: limit
      })
      res.paginated = data
      next()
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
