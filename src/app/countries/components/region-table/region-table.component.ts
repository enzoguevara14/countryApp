import { Component, Input } from '@angular/core';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'countries-region-table',
  templateUrl: './region-table.component.html',
  styles: [
  ]
})
export class RegionTableComponent {
  @Input()
  region: Region[]=[]

}
