import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createRoleUseCase = container.resolve(CreateRoleUseCase)

    const role = await createRoleUseCase.execute({
      name,
      description
    })

    return response.json(role)
  }
}
