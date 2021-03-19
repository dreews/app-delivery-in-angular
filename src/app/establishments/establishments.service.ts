import { Injectable } from '@angular/core';

import { ServiceInterface } from '../interfaces/service.interface';

import { Establishment } from './establishment.model';
import { ESTABLISHMENTS } from './establishments-mock';

@Injectable()
export class EstablishmentsService implements ServiceInterface<Establishment> {

  private establishmentsUrl: string = 'app/establishments'
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' })

  constructor() { }

  async findAll(): Promise<Establishment[]> {
    return Promise.resolve(ESTABLISHMENTS)
  }

  async find(id: string): Promise<Establishment> {
    return Promise.resolve(ESTABLISHMENTS.find((establishment) => (
      establishment.id === id
    )))
  }

  async update(establishment: Establishment): Promise<Establishment> {
    return Promise.resolve(establishment)
  }

  private handleError(err: any): Promise<any> {
    return Promise.reject(err.message || err)
  }
}
