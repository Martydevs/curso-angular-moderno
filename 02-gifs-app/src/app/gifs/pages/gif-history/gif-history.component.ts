import { Component, computed, inject, type Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from "../../services/gifs.service";

@Component({
  selector: 'gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryPageComponent {
  private _gifService = inject(GifService);
  private _activatedRoute = inject(ActivatedRoute);

  query: Signal<string>;

  constructor() {
    const params = this._activatedRoute.params
    
    this.query = toSignal(
      params.pipe(
        map((searchParams) => searchParams['query'])
      )
    );
  }

  gifsByKey = computed(() => {
    return this._gifService.getHistoryGifs(this.query());
  });
}
