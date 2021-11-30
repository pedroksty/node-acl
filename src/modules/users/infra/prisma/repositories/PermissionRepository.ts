import { PrismaClient } from '@prisma/client'

import { IPermissionRepository } from '@modules/users/repositories/IPermissionRepository'
import { Permission } from '../entities/Permission'
import { ICreatePermissionDTO } from '@modules/users/dtos/ICreatePermissionDTO'

const prisma = new PrismaClient()

class PermissionRepository implements IPermissionRepository {
  async findByName(permissionName: string): Promise<Permission> {
    const permission = await prisma.permission.findUnique({
      where: { name: permissionName }
    })

    return permission
  }

  async findById(permissionId: string): Promise<Permission> {
    const permission = await prisma.permission.findUnique({
      where: { id: permissionId }
    })

    return permission
  }

  async list(): Promise<Permission[]> {
    const permissions = await prisma.permission.findMany()

    return permissions
  }

  async create({ name, description }: ICreatePermissionDTO): Promise<Permission> {
    const permission = new Permission({
      name,
      description
    })

    const createdPermission = await prisma.permission.create({
      data: permission
    })

    return createdPermission
  }
}

export { PermissionRepository }
