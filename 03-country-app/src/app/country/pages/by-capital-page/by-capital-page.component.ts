import { Component } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountrySearchComponent } from "../../components/country-search/country-search.component";

@Component({
  selector: 'by-capital-page',
  imports: [
    CountryListComponent,
    CountrySearchComponent
  ],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  onSearch(value: string) {
    console.log(value);
  }
}
