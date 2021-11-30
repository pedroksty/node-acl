import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreatePermissionUseCase } from './CreatePermissionUseCase'

export class CreatePermissionController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createPermissionUseCase = container.resolve(CreatePermissionUseCase)

    const permission = await createPermissionUseCase.execute({
      name,
      description
    })

    return response.json(permission)
  }
}
