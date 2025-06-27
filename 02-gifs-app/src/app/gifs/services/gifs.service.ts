import { environment } from '$envs/environment';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import type { Gif } from '../interfaces/gif.interface';
import type { GipyhyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

type SearchHistory = Record<string, Gif[]>;

const GIF_KEY = 'history' as const;

function getGifsFromLocalStorage() {
  const gifsFromLS = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLS) as SearchHistory;
  return gifs;
}


@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  gifsLoading = computed(() => this.trendingGifs().length === 0);

  searchHistory = signal<SearchHistory>(
    getGifsFromLocalStorage(),
  );
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  saveGifsToLocaleStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  })

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GipyhyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(response.data);
        this.trendingGifs.set(gifs);
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http
      .get<GipyhyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: 20,
        },
      })
      .pipe(
        map((response) => GifMapper.mapGiphyItemToGifArray(response.data)),
        tap((gifs) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.trim().toLowerCase()]: gifs,
          }));
        }),
      );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
