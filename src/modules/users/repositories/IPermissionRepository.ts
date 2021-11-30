import { ICreatePermissionDTO } from '../dtos/ICreatePermissionDTO'
import { Permission } from '../infra/prisma/entities/Permission'

export interface IPermissionRepository {
  findById(permissionId: string): Promise<Permission>
  findByName(permissionName: string): Promise<Permission>
  list(): Promise<Permission[]>
  create(data: ICreatePermissionDTO): Promise<Permission>
}
