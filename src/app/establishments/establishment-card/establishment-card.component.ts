import { Component, Input, OnInit } from '@angular/core';
import { Establishment } from '../establishment.model';

@Component({
  selector: 'establishment-card',
  templateUrl: 'establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss']
})

export class EstablishmentCardComponent implements OnInit {
  @Input() establishment: Establishment

  constructor() {
  }

  ngOnInit() {
    const getLocalData = JSON.parse(localStorage.getItem(this.establishment.id))
    this.establishment = getLocalData || this.establishment
  }
}
