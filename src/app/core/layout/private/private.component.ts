import { Component } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "./components/sidebar.component";
import {FooterComponent} from "./components/footer.component";
import {HeaderComponent} from "./components/header.component";

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    SidebarComponent
  ],
  template: `

<div class="h-screen w-100">
  <app-sidebar/>
</div>
  `,
  styles: ``
})
export default class PrivateComponent {

}
