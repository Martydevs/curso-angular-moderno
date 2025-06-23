import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
})
export class DragonBallPageComponent {
  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  onPowerInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.power.set(Number(value));
  }

  powers({ power }: Character) {
    const styles = computed(() => {
      return {
        'text-primary': power < 9000,
        'text-danger': power >= 9000,
      };
    });

    return styles();
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
