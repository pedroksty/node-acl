import { PrismaClient } from '@prisma/client'

import { ICreateSolicitationDTO } from '@modules/solicitations/dtos/ICreateSolicitationDTO'
import { ISolicitationRepository } from '@modules/solicitations/repositories/ISolicitationRepository'
import { Solicitation } from '../entities/Solicitation'

const prisma = new PrismaClient()

class SolicitationRepository implements ISolicitationRepository {
  async create({ name, description }: ICreateSolicitationDTO): Promise<Solicitation> {
    const solicitation = new Solicitation({
      name,
      description
    })

    const createdSolicitation = await prisma.solicitation.create({
      data: solicitation
    })

    return createdSolicitation
  }

  async list(): Promise<Solicitation[]> {
    const solicitations = await prisma.solicitation.findMany()

    return solicitations
  }
}

export { SolicitationRepository }
