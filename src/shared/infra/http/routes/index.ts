import { Router } from 'express'

import { permissionsRouter } from './permissions.routes'
import { rolesRouter } from './roles.routes'
import { sessionRouter } from './sessions.routes'
import { solicitationRouter } from './solicitations.routes'
import { userRouter } from './user.routes'

const routes = Router()

routes.use('/users', userRouter)
routes.use('/sessions', sessionRouter)
routes.use('/solicitations', solicitationRouter)
routes.use('/roles', rolesRouter)
routes.use('/permissions', permissionsRouter)

export { routes }
