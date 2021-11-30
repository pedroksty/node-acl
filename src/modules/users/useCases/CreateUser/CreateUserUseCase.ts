import { IUserRepository } from '@modules/users/repositories/IUserRepository'
import { AppError } from '@shared/errors/AppError'
import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  username: string
  password: string
}

interface IResponse {

}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const userExists = await this.userRepository.findByUsername(username)

    if (userExists) {
      throw new AppError('User already exists')
    }

    const hashPassword = await hash(password, 6)

    const createdUser = await this.userRepository.create({
      username,
      password: hashPassword
    })

    return {
      id: createdUser.id,
      username: createdUser.username
    }
  }
}
