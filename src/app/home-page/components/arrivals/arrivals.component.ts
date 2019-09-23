import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import { trackElement } from '@app/shared/functions/track-element';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss'],
})
export class ArrivalsComponent implements OnInit {
  products: IArrivals[];

  trackArrivals = trackElement;

  constructor(private readonly arrivals: ArrivalsService) {}

  ngOnInit(): void {
    this.arrivals
      .getArrivals()
      .pipe(map(data => data.products))
      .subscribe(newArrivals => {
        this.products = newArrivals;
      });
  }
}
