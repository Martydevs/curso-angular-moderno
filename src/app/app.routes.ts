import type { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { DragonballSuperPageComponent } from "./pages/dragonball-super/dragonball-super-page.component";
import { DragonBallPageComponent } from './pages/dragonball/dragonball-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonBallPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
