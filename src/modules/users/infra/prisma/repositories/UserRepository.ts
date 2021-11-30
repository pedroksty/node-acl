import { PrismaClient } from '@prisma/client'

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { IUserRepository } from '@modules/users/repositories/IUserRepository'
import { User } from '../entities/User'
import { IAddAcessDTO } from '@modules/users/dtos/IAddAcessDTO'

const prisma = new PrismaClient()

class UserRepository implements IUserRepository {
  async addAccess({ userId, roles, permissions }: IAddAcessDTO): Promise<User> {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        role: {
          connect: roles.map(role => { return { id: role } })
        },
        permission: {
          connect: permissions.map(permission => { return { id: permission } })
        }
      },
      include: {
        permission: true,
        role: true
      }
    })

    return user
  }

  async findById(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    return user
  }

  async findByUsername(username: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { username }
    })

    return user
  }

  async create({ username, password }: ICreateUserDTO): Promise<User> {
    const user = new User({
      username,
      password
    })

    const createdUser = await prisma.user.create({
      data: user
    })

    return createdUser
  }
}

export { UserRepository }
