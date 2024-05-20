import { Component } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";


@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet
  ],
  template: `
    <app-header/>
    <div class="mt-20 md:m-0">
      <router-outlet/>
    </div>
    <app-footer/>
  `,
  styles: ``
})
export default class PublicComponent {

}
