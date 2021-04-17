import { Pool } from 'pg';
import { IDatabaseProvider } from './IDatabaseProvider';
import dbConfig from '../../config/database.config';

export class PostgresProvider implements IDatabaseProvider {
  private pool;
  constructor() {
    this.pool = new Pool({
      connectionString:
        `${dbConfig.schema}://${dbConfig.user}:${dbConfig.pass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`,
      ssl: false,
    });
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async insert(param: string): Promise<void> {
    throw new Error('Method not implemented.');

    // this.pool.query(
    //   'INSERT INTO books (author, title) VALUES ($1, $2)',
    //   [param.param_1, param.param_2],
    //   (error) => {
    //     if (error) {
    //       throw error;
    //     }

    //     return {status: 'success', message: 'Book added.'};
    //   }
    // );
  }
  async update(param: string, id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async select(param: string): Promise<void> {
    throw new Error('Method not implemented.');

    // this.pool.query('SELECT * FROM books', (error, results) => {
    //   if (error) {
    //     throw error;
    //   }

    //   return results.rows;
    // });
  }
}