import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Scaloneta API',
      description: 'Argentina national players API',
      version: '1.0.0'
    }
  },
  servers: [
    {
      url: 'http://localhost:8080'
    }
  ],
  apis: ['./src/v1/routes/playerRoutes.js']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
    console.log(`V1 Docs are available at http://localhost:${port}/api/v1/docs`)
  })
}

export { swaggerDocs }
