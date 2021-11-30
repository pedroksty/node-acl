import { ICreateRoleDTO } from '../dtos/ICreateRoleDTO'
import { Role } from '../infra/prisma/entities/Role'

export interface IRoleRepository {
  findById(roleId: string): Promise<Role>
  findByName(roleName: string): Promise<Role>
  list(): Promise<Role[]>
  create(data: ICreateRoleDTO): Promise<Role>
  addPermissions(roleId: string, permissions: string[]): Promise<Role>
}
