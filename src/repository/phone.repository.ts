import { PhoneRepositoryBase } from "./base/phone.repository.base.js";
import { Phone } from "../entity/phone.entity.js";
import { Database } from "../database/connection.js";
import { CreatePhoneType, PhoneType } from "../type/phone.type.js";

export class PhoneRepository implements PhoneRepositoryBase {
    async createNewPhone(newPhone: CreatePhoneType): Promise<PhoneType> {
        const databaseInstance =  await Database.getInstance();
        const phoneRepository = databaseInstance.getRepository(Phone);
        const phone = phoneRepository.create(newPhone);
        return await phoneRepository.save(phone);
    }
}
