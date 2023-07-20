import { Component } from '@angular/core';
import { Region } from '../../interfaces/region';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  region: Region []=[]
constructor(private _countriesServices:CountriesService){

}


  searchByRegion(term:string){
   this._countriesServices.searchRegion(term).subscribe(
    resp=>{
      this.region=resp

    }
   )


  }

}
