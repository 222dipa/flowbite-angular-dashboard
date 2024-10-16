import {Component, OnInit} from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    SidebarComponent,
    NgClass
  ],
  template: `
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <app-header/>
      <app-sidebar/>
      <main class="p-4 md:ml-64 h-auto pt-20" [ngClass]="{'max-w-screen-xl mx-auto': mainContentBoxed}">
        <router-outlet/>
      </main>
    </div>

  `,
  styles: ``
})
export default class PrivateComponent implements OnInit{

  mainContentBoxed: boolean = false;

  ngOnInit() {
  }

}
