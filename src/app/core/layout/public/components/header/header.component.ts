import {Component, OnInit} from '@angular/core';
import {DarkModeSwitcherComponent} from "../../../../../shared/components/dark-mode-switcher.component";
import {LogoComponent} from "../../../../../shared/components/logo.component";
import {ToggleMenuComponent} from "./components/toggle-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DarkModeSwitcherComponent,
    LogoComponent,
    ToggleMenuComponent
  ],
  template: `
    <nav
      class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <app-logo/>
        <div class="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <app-dark-mode-switcher/>
          <button type="button"
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Login
          </button>
          <app-toggle-menu/>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 px-3">
          <ul
            class="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#"
                 class="block py-2 px-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
                 aria-current="page">Home</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  `,
  styles: ``
})
export class HeaderComponent {
}
