import { ISolicitationRepository } from '@modules/solicitations/repositories/ISolicitationRepository'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  description: string
}

interface IResponse {

}

@injectable()
export class CreateSolicitationUseCase {
  constructor(
    @inject('SolicitationRepository')
    private solicitationRepository: ISolicitationRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<IResponse> {
    const solicitation = await this.solicitationRepository.create({
      name,
      description
    })

    return solicitation
  }
}
