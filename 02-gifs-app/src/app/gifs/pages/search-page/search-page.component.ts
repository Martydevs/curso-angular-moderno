import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import type { Gif } from '../../interfaces/gif.interface';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  private _gifs = inject(GifService);

  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this._gifs.searchGifs(query).subscribe((gifs) => {
      this.gifs.set(gifs);
    });
  }
}
