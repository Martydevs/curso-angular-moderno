import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-hero',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  changeHero() {
    this.name.set('Spiderman');
  }

  changeAge() {
    this.age.set(24);
  }

  resetForm() {
    this.name.set('Iron Man');
    this.age.set(45);
  }
}
