import { Component, OnInit } from '@angular/core';

import { BestsellersService } from '../../../shared/services/bestsellers.service';
import { IBestsellerItem } from '../../../shared/interfaces/bestseller-item.interface';
import { TrackElementService } from '@app/shared/services/track-element.service';

@Component({
  selector: 'app-best-sales',
  templateUrl: './best-sales.component.html',
  styleUrls: ['./best-sales.component.scss'],
})
export class BestSalesComponent implements OnInit {
  products: IBestsellerItem[];
  constructor(private readonly bestsellersService: BestsellersService, private readonly trackElementService: TrackElementService) {}

  ngOnInit(): void {
    this.bestsellersService.getBestsellers().subscribe(data => (this.products = data.products));
  }
}
