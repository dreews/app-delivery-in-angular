export interface ServiceInterface<T> {
  findAll(): Promise<T[]>;
  find(id: number): Promise<T>;
  update(object: T): Promise<T>;
}
