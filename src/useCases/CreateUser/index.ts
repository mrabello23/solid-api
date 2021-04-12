import { CreateUserController } from "../../controllers/CreateUserController";
import { MailtrapMailProvider } from "../../providers/MailtrapMailProvider";
import { UsersRepositories } from "../../repositories/postgres/UsersRepositories";
import { CreateUser } from "./CreateUser";

const mailtrapMailProvider = new MailtrapMailProvider();
const userRepository = new UsersRepositories();

const createUser = new CreateUser(userRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createUser);

export { createUser, createUserController };
