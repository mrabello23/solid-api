import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class UsersRepositories extends Repository<User> implements IUserRepository {
  async findByEmail(email: string): Promise<User> {
    return this.createQueryBuilder('user')
      .where('user.email = :email', {email})
      .getOne();
  }

  async findByName(name: string): Promise<User> {
    return this.createQueryBuilder('user')
      .where('user.name = :name', {name})
      .getOne();
  }
}
