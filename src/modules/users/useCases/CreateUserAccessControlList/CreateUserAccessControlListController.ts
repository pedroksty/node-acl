import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserAccessControlListUseCase } from './CreateUserAccessControlListUseCase'

export class CreateUserAccessControlListController {
  async handle(request: Request, response: Response) {
    const { roles, permissions } = request.body
    const { id: userId } = request.user

    const createUserAccessControlListUseCase = container.resolve(CreateUserAccessControlListUseCase)

    const user = await createUserAccessControlListUseCase.execute({
      userId,
      roles,
      permissions
    })

    return response.json(user)
  }
}
