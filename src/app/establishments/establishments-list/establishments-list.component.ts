import { Component, OnInit } from '@angular/core';

import { Establishment } from '../establishment.model'
import { EstablishmentsService } from '../establishments.service';

@Component({
  selector: 'establishments-list',
  templateUrl: 'establishments-list.component.html'
})
export class EstablishmentsListComponent implements OnInit {

  establishments: Establishment[];

  constructor(
    public establishmentService: EstablishmentsService,
  ) { }

  ngOnInit(): void {
    this.establishmentService.findAll()
      .subscribe((data: Establishment[])=>{
        this.establishments = data;
      })
  }
}
