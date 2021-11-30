import { IPermissionRepository } from '@modules/users/repositories/IPermissionRepository'
import { IRoleRepository } from '@modules/users/repositories/IRoleRepository'
import { IUserRepository } from '@modules/users/repositories/IUserRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  userId: string
  roles: string[]
  permissions: string[]
}

interface IResponse {

}

@injectable()

export class CreateUserAccessControlListUseCase {
  constructor(
    @inject('PermissionRepository')
    private permissionRepository: IPermissionRepository,

    @inject('RoleRepository')
    private roleRepository: IRoleRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository

  ) { }

  async execute({ userId, roles, permissions }: IRequest): Promise<IResponse> {
    const userExists = await this.userRepository.findById(userId)

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    return {

    }
  }
}
