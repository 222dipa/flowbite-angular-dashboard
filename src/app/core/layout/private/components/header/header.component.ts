import {Component, OnInit} from '@angular/core';
import {DarkModeSwitcherComponent} from "./dark-mode-switcher.component";
import {Dropdown, DropdownOptions} from "flowbite";
import {AvatarDropdownComponent} from "./avatar-dropdown.component";
import {AppsDropdownComponent} from "./apps-dropdown.component";
import {NotificationsDropdownComponent} from "./notifications-dropdown.component";
import {ToggleSidebarComponent} from "./toggle-sidebar.component";
import {LogoComponent} from "../../../../shared/components/logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DarkModeSwitcherComponent,
    AvatarDropdownComponent,
    AppsDropdownComponent,
    NotificationsDropdownComponent,
    ToggleSidebarComponent,
    LogoComponent
  ],
  template: `
    <nav
      class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-start items-center">
          <app-toggle-sidebar/>
          <app-logo/>
        </div>
        <div class="flex items-center gap-0 md:gap-3 lg:order-2">
          <div class="hidden md:inline">
            <app-dark-mode-switcher/>
          </div>
          <app-notifications-dropdown/>
          <app-apps-dropdown/>
          <app-avatar-dropdown/>
        </div>
      </div>
    </nav>
  `,
  styles: ``
})
export class HeaderComponent {


}
