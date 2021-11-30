import { v4 } from 'uuid'
import { Role } from './Role'
import { User } from './User'

export class Permission {
  public readonly id: string

  public name: string
  public description: string

  public created_at?: Date

  public user?: User[]
  public role?: Role[]

  constructor(props: Omit<Permission, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      this.created_at = new Date()
    }
  }
}
