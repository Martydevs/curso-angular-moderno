import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  onPowerInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.power.set(Number(value));
  }

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const id = this.characters().length + 1;

    this.characters.update((v) => [
      ...v,
      {
        id: id,
        name: this.name(),
        power: this.power(),
      },
    ]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
