import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateRolePermissionUseCase } from './CreateRolePermissionUseCase'

export class CreateRolePermissionController {
  async handle(request: Request, response: Response) {
    const { roleId } = request.params
    const { permissions } = request.body

    const createRolePermissionUseCase = container.resolve(CreateRolePermissionUseCase)

    const role = await createRolePermissionUseCase.execute({
      roleId,
      permissions
    })

    return response.json(role)
  }
}
