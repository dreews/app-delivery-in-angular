import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

import { Establishment } from '../establishment.model'
import { EstablishmentsService } from '../establishments.service';

@Component({
  selector: 'establishments-list',
  templateUrl: 'establishments-list.component.html'
})
export class EstablishmentsListComponent implements OnInit {

  establishments: Establishment[] = [];

  constructor(
    private establishmentService: EstablishmentsService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    const fetch = async () => {
      const establishments = await this.establishmentService.findAll()
      this.establishments = establishments;
    }

    try { fetch() } catch (err) {
      console.error('aconteceu um erro', err)
    }
  }
}
