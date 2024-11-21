import { DataSource } from 'typeorm';
import { User } from '../entity/user.entity.js';
import { Phone } from '../entity/phone.entity.js';

/*
    Uso do padrão SINGLETON, ou seja, apenas um objeto será criado
    e esse mesmo objeto será reutilizado em várias partes do código.
*/

export class Database {
  private static instance: DataSource;

  public static async getInstance() {
    if (!Database.instance) {
      Database.instance = new DataSource({
        type: "sqlite",
        database: "database.sqlite",
        entities: [User, Phone],
        synchronize: true
      });
      
      await Database.instance.initialize();
    }
    
    return Database.instance;
  }
}
