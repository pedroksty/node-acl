import { IPermissionRepository } from '@modules/users/repositories/IPermissionRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  description: string
}

interface IResponse {

}

@injectable()
export class CreatePermissionUseCase {
  constructor(
    @inject('PermissionRepository')
    private permissionRepository: IPermissionRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<IResponse> {
    const permissionExists = await this.permissionRepository.findByName(name)

    if (permissionExists) {
      throw new AppError('Role already exists')
    }

    const createdPermission = await this.permissionRepository.create({
      name,
      description
    })

    return createdPermission
  }
}
