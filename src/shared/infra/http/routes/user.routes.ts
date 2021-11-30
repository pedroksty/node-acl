import { Router } from 'express'

import { CreateUserController } from '@modules/users/useCases/CreateUser/CreateUserController'
import { CreateUserAccessControlListController } from '@modules/users/useCases/CreateUserAccessControlList/CreateUserAccessControlListController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const userRouter = Router()

const createUserController = new CreateUserController()
const createUserAccessControlList = new CreateUserAccessControlListController()

userRouter.post('/', createUserController.handle)
userRouter.put('/access', ensureAuthenticated, createUserAccessControlList.handle)

export { userRouter }
