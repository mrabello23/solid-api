interface IMessageAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IMessageAddress;
  from: IMessageAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
