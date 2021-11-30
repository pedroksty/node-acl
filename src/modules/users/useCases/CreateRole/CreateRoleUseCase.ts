import { IRoleRepository } from '@modules/users/repositories/IRoleRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  description: string
}

interface IResponse {

}

@injectable()
export class CreateRoleUseCase {
  constructor(
    @inject('RoleRepository')
    private rolePermission: IRoleRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<IResponse> {
    const roleExists = await this.rolePermission.findByName(name)

    if (roleExists) {
      throw new AppError('Role already exists')
    }

    const createdRole = await this.rolePermission.create({
      name,
      description
    })

    return createdRole
  }
}
