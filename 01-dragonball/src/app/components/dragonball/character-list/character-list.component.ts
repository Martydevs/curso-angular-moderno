import { NgClass } from "@angular/common";
import { Component, computed, input, type InputSignal } from '@angular/core';
import type { Character } from "../../../interfaces/character.interface";

@Component({
  imports: [NgClass],
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters: InputSignal<Character[]> = input.required();
  listTitle: InputSignal<string> = input.required();

  powers({ power }: Character) {
    const styles = computed(() => {
      return {
        'text-primary': power < 9000,
        'text-danger': power >= 9000,
      };
    });

    return styles();
  }
}
