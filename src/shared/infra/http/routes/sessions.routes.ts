import { CreateSessionController } from '@modules/users/useCases/CreateSession/CreateSessionController'
import { Router } from 'express'

const sessionRouter = Router()

const createSessionController = new CreateSessionController()

sessionRouter.post('/', createSessionController.handle)

export { sessionRouter }
