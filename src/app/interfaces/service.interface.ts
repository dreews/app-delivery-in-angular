export interface ServiceInterface<T> {
  findAll(): Promise<T[]>;
  find(id: string): Promise<T>;
  update(object: T): Promise<T>;
}
