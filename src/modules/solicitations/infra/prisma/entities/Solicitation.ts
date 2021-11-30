import { v4 } from 'uuid'

export class Solicitation {
  public readonly id: string

  public name: string
  public description: string

  public created_at?: Date

  constructor(props: Omit<Solicitation, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      this.created_at = new Date()
    }
  }
}
