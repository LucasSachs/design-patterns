import { Phone } from "../entity/phone.entity.js";

export type PhoneType = InstanceType<typeof Phone>;
export type CreatePhoneType = Omit<PhoneType, 'id'>;
