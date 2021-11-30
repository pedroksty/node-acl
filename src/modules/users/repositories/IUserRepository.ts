import { IAddAcessDTO } from '../dtos/IAddAcessDTO'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { User } from '../infra/prisma/entities/User'

export interface IUserRepository {
  findById(userId: string): Promise<User>
  findByUsername(username: string): Promise<User>
  create(data: ICreateUserDTO): Promise<User>
  addAccess(data: IAddAcessDTO): Promise<User>
}
