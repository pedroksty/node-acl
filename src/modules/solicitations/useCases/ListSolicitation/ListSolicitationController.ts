import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListSolicitationUseCase } from './ListSolicitationUseCase'

export class ListSolicitationController {
  async handle(request: Request, response: Response) {
    const listSolicitationUseCase = container.resolve(ListSolicitationUseCase)

    const solicitations = await listSolicitationUseCase.execute()

    return response.json(solicitations)
  }
}
