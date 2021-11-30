import { PrismaClient } from '@prisma/client'

import { ICreateRoleDTO } from '@modules/users/dtos/ICreateRoleDTO'
import { IRoleRepository } from '@modules/users/repositories/IRoleRepository'
import { Role } from '../entities/Role'

const prisma = new PrismaClient()

class RoleRepository implements IRoleRepository {
  async findByName(roleName: string): Promise<Role> {
    const role = await prisma.role.findUnique({
      where: { name: roleName }
    })

    return role
  }

  async findById(roleId: string): Promise<Role> {
    const role = await prisma.role.findUnique({
      where: { id: roleId }
    })

    return role
  }

  async list(): Promise<Role[]> {
    const roles = await prisma.role.findMany()

    return roles
  }

  async create({ name, description }: ICreateRoleDTO): Promise<Role> {
    const role = new Role({
      name,
      description
    })

    const createdRole = await prisma.role.create({
      data: role
    })

    return createdRole
  }
}

export { RoleRepository }
