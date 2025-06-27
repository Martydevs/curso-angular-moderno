import { Component } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountrySearchComponent } from "../../components/country-search/country-search.component";

@Component({
  selector: 'by-country-page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  search(value: string) {
    console.log(value)
  }
}
