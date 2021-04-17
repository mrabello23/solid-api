export interface IDatabaseProvider {
  insert(param: string): Promise<void>;
  update(param: string, id: number): Promise<void>;
  select(param: string): Promise<void>;
  delete(id: number): Promise<void>;
}