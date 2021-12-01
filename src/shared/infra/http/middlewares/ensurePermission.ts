import { UserRepository } from '@modules/users/infra/prisma/repositories/UserRepository'
import { AppError } from '@shared/errors/AppError'
import { Request, Response, NextFunction } from 'express'

const userRepository = new UserRepository()

export function can(permissionsRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.user

    const user = await userRepository.findById(id)

    if (!user) {
      throw new AppError('User does not exists')
    }

    console.log(user)

    const permissionExists = user.permission.map(permission => permission.name).some(permission => permissionsRoutes.includes(permission))

    if (!permissionExists) {
      throw new AppError('Unathorized', 401)
    }

    return next()
  }
}

export function is(rolesRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.user

    const user = await userRepository.findById(id)

    if (!user) {
      throw new AppError('User does not exists')
    }

    const rolesExists = user.role.map(role => role.name).some(role => rolesRoutes.includes(role))

    if (!rolesExists) {
      throw new AppError('Unathorized', 401)
    }

    return next()
  }
}
