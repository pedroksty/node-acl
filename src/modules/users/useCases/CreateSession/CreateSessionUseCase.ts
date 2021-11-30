import { authConfig } from '@config/auth'
import { IUserRepository } from '@modules/users/repositories/IUserRepository'
import { AppError } from '@shared/errors/AppError'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  username: string
  password: string
}

interface IResponse {

}

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const userExists = await this.userRepository.findByUsername(username)

    if (!userExists) {
      throw new AppError('Invalid username', 404)
    }

    const verifyPassword = compare(userExists.password, password)

    if (!verifyPassword) {
      throw new AppError('Invalid password', 404)
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: userExists.id
    })

    return {
      user: {
        id: userExists.id,
        username: userExists.username,
        password: userExists.password
      },
      token
    }
  }
}
