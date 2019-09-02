import { Component, OnInit, Input } from '@angular/core';
import { Spinner } from '@app/shared/interfaces/spinner.interface';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() spinner: Spinner;
  constructor() {}

  ngOnInit() {}
}
