import { CreateRoleController } from '@modules/users/useCases/CreateRole/CreateRoleController'
import { CreateRolePermissionController } from '@modules/users/useCases/CreateRolePermission/CreateRolePermissionController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const rolesRouter = Router()

const createRoleController = new CreateRoleController()
const createRolePermission = new CreateRolePermissionController()

rolesRouter.post('/', ensureAuthenticated, createRoleController.handle)
rolesRouter.put('/permissions/:roleId', ensureAuthenticated, createRolePermission.handle)

export { rolesRouter }
