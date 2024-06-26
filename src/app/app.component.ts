import {AfterViewInit, Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit{
  title = 'flowbite-angular-dashboard';

  ngAfterViewInit () {
    initFlowbite();
  }
}
