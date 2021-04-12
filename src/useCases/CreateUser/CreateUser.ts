import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './ICreateUserRequestDTO';

export class CreateUser {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.userRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe de Suporte',
        email: 'suporte@teste.com.br'
      },
      subject: 'Bem vindo ao app!',
      body: `<p>Olá, ${data.name}, Seja bem vindo ao app!</p>`,
    });
  }
}
