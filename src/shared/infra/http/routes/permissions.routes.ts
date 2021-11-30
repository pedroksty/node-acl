import { CreatePermissionController } from '@modules/users/useCases/CreatePermission/CreatePermissionController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const permissionsRouter = Router()

const createPermissionController = new CreatePermissionController()

permissionsRouter.post('/', ensureAuthenticated, createPermissionController.handle)

export { permissionsRouter }
