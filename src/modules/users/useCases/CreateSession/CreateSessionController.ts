import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateSessionUseCase } from './CreateSessionUseCase'

export class CreateSessionController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const createSessionUseCase = container.resolve(CreateSessionUseCase)

    const session = await createSessionUseCase.execute({
      username,
      password
    })

    return response.json(session)
  }
}
