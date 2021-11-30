import { v4 } from 'uuid'
import { Permission } from './Permission'
import { Role } from './Role'

export class User {
  public readonly id: string

  public username: string
  public password: string

  public created_at?: Date

  public role?: Role[]
  public permission?: Permission[]

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      this.created_at = new Date()
    }
  }
}
