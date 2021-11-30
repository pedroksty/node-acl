import { CreateRoleController } from '@modules/users/useCases/CreateRole/CreateRoleController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const rolesRouter = Router()

const createRoleController = new CreateRoleController()

rolesRouter.post('/', ensureAuthenticated, createRoleController.handle)

export { rolesRouter }
