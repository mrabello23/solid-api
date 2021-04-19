import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
