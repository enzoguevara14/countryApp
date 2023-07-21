import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
 countries: Country []=[]
 isLoading:boolean=false
constructor(private _countriesServices:CountriesService){

}


  searchByCapital(term:string){
    this.isLoading=true
   this._countriesServices.searchCapital(term).subscribe(
    resp=>{
      this.countries=resp
this.isLoading=false
    }
   )


  }

}
