import { Router } from 'express'

import { ListSolicitationController } from '@modules/solicitations/useCases/ListSolicitation/ListSolicitationController'
import { CreateSolicitationController } from '@modules/solicitations/useCases/CreateSolicitation/CreateSolicitationController'

const solicitationRouter = Router()

const listSoliciationController = new ListSolicitationController()
const createSolicitationController = new CreateSolicitationController()

solicitationRouter.get('/', listSoliciationController.handle)
solicitationRouter.post('/', createSolicitationController.handle)

export { solicitationRouter }
