import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { Earth, LucideAngularModule, Map, Plane } from "lucide-angular";

@Component({
  selector: 'country-top-menu',
  imports: [
    LucideAngularModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {
  readonly plane = Plane;
  readonly map = Map;
  readonly region = Earth;
}
