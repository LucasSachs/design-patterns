import { User } from "../entity/user.entity.js";

export type UserType = InstanceType<typeof User>;
export type CreateUserType = Omit<UserType, 'id'>;
