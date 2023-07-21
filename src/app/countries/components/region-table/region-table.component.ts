import { Component, Input } from '@angular/core';
import { Region } from '../../interfaces/region';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-region-table',
  templateUrl: './region-table.component.html',
  styles: [
  ]
})
export class RegionTableComponent {
  @Input()
  region: Country[]=[]

}
