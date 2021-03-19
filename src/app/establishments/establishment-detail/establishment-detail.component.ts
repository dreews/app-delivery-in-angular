import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Establishment } from '../establishment.model';
import { EstablishmentsService } from '../establishments.service';

@Component({
  selector: 'establishment-detail',
  templateUrl: 'establishment-detail.component.html',
  styleUrls: ['./establishment-detail.component.scss'],
})

export class EstablishmentDetailComponent implements OnInit {
  establishment: Establishment;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private establishmentsService: EstablishmentsService
  ) { }

  ngOnInit(): void {
    this.establishment = new Establishment('', 0, '', '', '', '', '', '', '', '', '')

    this.route.params.forEach((params: Params) => {
      const id: string = params.id;

      if (!id) return false;

      this.establishmentsService.find(id)
        .then((establishment: Establishment) => {
          this.establishment = establishment
        })
    })
  }

  onSubmit(): void {
    this.establishmentsService
      .update(this.establishment)
      .then(() => this.goBack())
  }

  goBack(): void {
    this.location.back()
  }
}
