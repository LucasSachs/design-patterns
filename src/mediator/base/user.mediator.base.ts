import { User } from "../../entity/user.entity.js";

export interface UserMediatorBase {
  sendMessage(message: string, user: User): void;
}
