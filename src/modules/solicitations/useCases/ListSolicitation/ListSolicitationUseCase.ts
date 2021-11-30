import { ISolicitationRepository } from '@modules/solicitations/repositories/ISolicitationRepository'
import { inject, injectable } from 'tsyringe'

interface IRequest {

}

interface IResponse {

}

@injectable()
export class ListSolicitationUseCase {
  constructor(
    @inject('SolicitationRepository')
    private solicitationRepository: ISolicitationRepository
  ) { }

  async execute(): Promise<IResponse> {
    const solicitations = await this.solicitationRepository.list()

    return solicitations
  }
}
