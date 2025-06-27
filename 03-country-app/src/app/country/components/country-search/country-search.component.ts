import { Component, input, output } from '@angular/core';
import { LucideAngularModule, Search } from "lucide-angular";

@Component({
  selector: 'country-search',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './country-search.component.html',
})
export class CountrySearchComponent {
  readonly search = Search;

  searchTerm = output<string>()
  placeholder = input<string>('Buscar')
}
