import { CreatePhoneType, PhoneType } from "../../type/phone.type.js";

export abstract class PhoneRepositoryBase {
    abstract createNewPhone(newPhone: CreatePhoneType): Promise<PhoneType>;
}
