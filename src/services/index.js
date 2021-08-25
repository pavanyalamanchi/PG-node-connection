import { Router } from 'express'

import route from './authors/routes.js'

const mainRoute = Router()

mainRoute.use('/authors', route)

export default mainRoute