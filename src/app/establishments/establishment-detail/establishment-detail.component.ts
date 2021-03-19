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
    public establishmentsService: EstablishmentsService
  ) { }

  ngOnInit(): void {
    this.establishment = new Establishment('', 0, '', '', '', '', '', '', '', '', '')

    this.route.params.forEach((params: Params) => {
      const id: string = params.id;

      if (!id) return false;

      const getLocalData = JSON.parse(localStorage.getItem(id))

      this.establishmentsService
        .find(id)
        .subscribe(
          (data) => {
            this.establishment = getLocalData || data
          },
          err => console.log(err)
        )
    })
  }

  onSubmit(): void {
    let id: string;

    this.establishmentsService
      .update(this.establishment)
      .subscribe(
        (data) => id = data.id,
        err => console.log(err),
        () => {
          localStorage.setItem(id, JSON.stringify(this.establishment))
          this.goBack()
        }
      )
  }

  goBack(): void {
    this.location.back()
  }
}
