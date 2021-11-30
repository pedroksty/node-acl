import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateSolicitationUseCase } from './CreateSolicitationUseCase'

export class CreateSolicitationController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createSolicitationUseCase = container.resolve(CreateSolicitationUseCase)

    const soliciation = await createSolicitationUseCase.execute({
      name,
      description
    })

    return response.json(soliciation)
  }
}
