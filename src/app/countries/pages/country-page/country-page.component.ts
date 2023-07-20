import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {

 public  country?:Country
  constructor(
    private activateRoute: ActivatedRoute,
    private _countryService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this._countryService.searchCountryAlphaCode(id))
      )
      .subscribe((resp) => {
        console.log(resp);

        if (!resp) return this.router.navigateByUrl('');
        this.country=resp
        return

      });
  }
}
