export interface IGenericCrudService<T> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  update(id: string, data: T): Promise<T>;
  remove(id: string): Promise<T>;
}
