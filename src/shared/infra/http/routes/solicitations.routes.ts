import { Router } from 'express'

import { ListSolicitationController } from '@modules/solicitations/useCases/ListSolicitation/ListSolicitationController'
import { CreateSolicitationController } from '@modules/solicitations/useCases/CreateSolicitation/CreateSolicitationController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { can, is } from '../middlewares/ensurePermission'

const solicitationRouter = Router()

const listSoliciationController = new ListSolicitationController()
const createSolicitationController = new CreateSolicitationController()

solicitationRouter.get('/', ensureAuthenticated, is(['administrador']), can(['list_product']), listSoliciationController.handle)
solicitationRouter.post('/', createSolicitationController.handle)

export { solicitationRouter }
