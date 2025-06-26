import { Component, input } from '@angular/core';
import type { Gif } from "../../interfaces/gif.interface";
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";

@Component({
  selector: 'gifs-list',
  templateUrl: './gif-list.component.html',
  imports: [GifListItemComponent],
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
}
