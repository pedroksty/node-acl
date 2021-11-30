import { v4 } from 'uuid'
import { Permission } from './Permission'
import { User } from './User'

export class Role {
  public readonly id: string

  public name: string
  public description: string

  public created_at?: Date

  public user?: User[]
  public permission?: Permission[]

  constructor(props: Omit<Role, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      this.created_at = new Date()
    }
  }
}
