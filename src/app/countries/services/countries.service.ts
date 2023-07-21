import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of,map } from 'rxjs';
import { Region } from '../interfaces/region';

@Injectable({providedIn: 'root'})
export class CountriesService {
  apiUrl: string='https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }


  private getCountryRequest(url:string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError (()=> of([])),
    );
  }


  searchCountryAlphaCode(term:string): Observable<Country|null>{
    return  this.http.get<Country[]>(`${this.apiUrl}/alpha/${term}`)
   .pipe(
    map(countries=> countries.length>0 ? countries[0]:null ),
    catchError(error=> of(null))
   );
  }

  searchCapital(term:string): Observable<Country[]>
  {const url = `${this.apiUrl}/capital/${term}`
   return  this.getCountryRequest(url)

  }
  searchCountry(term:string): Observable<Country[]>
  {
   const url = `${this.apiUrl}/name/${term}`
   return  this.getCountryRequest(url)
  }
  searchRegion(term:string): Observable<Country[]>
  {
   return  this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
   .pipe(
    catchError(error=> of([]))
   );
  }
}
