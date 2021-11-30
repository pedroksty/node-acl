import { container } from 'tsyringe'

import { PermissionRepository } from '@modules/users/infra/prisma/repositories/PermissionRepository'
import { RoleRepository } from '@modules/users/infra/prisma/repositories/RoleRepository'
import { UserRepository } from '@modules/users/infra/prisma/repositories/UserRepository'
import { IPermissionRepository } from '@modules/users/repositories/IPermissionRepository'
import { IRoleRepository } from '@modules/users/repositories/IRoleRepository'
import { IUserRepository } from '@modules/users/repositories/IUserRepository'
import { ISolicitationRepository } from '@modules/solicitations/repositories/ISolicitationRepository'
import { SolicitationRepository } from '@modules/solicitations/infra/prisma/repositories/SolicitationRepository'

container.registerSingleton<IPermissionRepository>('PermissionRepository', PermissionRepository)

container.registerSingleton<IRoleRepository>('RoleRepository', RoleRepository)

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<ISolicitationRepository>('SolicitationRepository', SolicitationRepository)
