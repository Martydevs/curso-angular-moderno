import { Component, inject } from '@angular/core';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballService } from "../../services/dragonball.service";

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  public dbs = inject(DragonballService);
}
