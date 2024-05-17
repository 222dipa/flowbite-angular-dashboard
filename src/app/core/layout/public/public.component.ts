import { Component } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./components/header.component";
import {FooterComponent} from "./components/footer.component";


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
        <router-outlet/>
        <app-footer/>
  `,
  styles: ``
})
export default class PublicComponent {

}
