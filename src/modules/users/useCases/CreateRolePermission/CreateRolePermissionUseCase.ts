import { IRoleRepository } from '@modules/users/repositories/IRoleRepository'
import { AppError } from '@shared/errors/AppError'
import { IRouterHandler } from 'express'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  roleId: string
  permissions: string[]
}

interface IResponse {

}

@injectable()
export class CreateRolePermissionUseCase {
  constructor(
    @inject('RoleRepository')
    private roleRepository: IRoleRepository
  ) { }

  async execute({ roleId, permissions }: IRequest): Promise<IResponse> {
    console.log(roleId)
    console.log(permissions)

    const roleExists = await this.roleRepository.findById(roleId)

    if (!roleExists) {
      throw new AppError('Role does not exists', 404)
    }

    const updatedRole = await this.roleRepository.addPermissions(roleId, permissions)

    return updatedRole
  }
}
