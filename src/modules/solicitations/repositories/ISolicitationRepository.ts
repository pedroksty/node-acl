import { ICreateSolicitationDTO } from '../dtos/ICreateSolicitationDTO'
import { Solicitation } from '../infra/prisma/entities/Solicitation'

export interface ISolicitationRepository {
  create(data: ICreateSolicitationDTO): Promise<Solicitation>
  list(): Promise<Solicitation[]>
}
