import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {LogoComponent} from "../../../../../shared/components/logo.component";
import {LucideAngularModule, Book} from "lucide-angular";
import {IconComponent} from "../../../../../shared/components/icon.component";
import {Dropdown, DropdownOptions, initFlowbite} from "flowbite";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    LogoComponent,
    IconComponent,
  ],
  template: `
    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <ul class="space-y-2">
          @for (item of menu; track i; let i = $index; ) {

            @if (item.type === 'single') {
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  @if (item.icon) {
                    <app-icon [name]="item.icon"/>
                  }
                  @if (item.label) {
                    <span class="ml-3">{{ item?.label }}</span>
                  }

                </a>
              </li>
            }

            @if (item.type === 'multi') {
              <button
                type="button"
                class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                [attr.id]="'dropdownmenubutton'+i"
                [attr.aria-controls]="'dropdownmenu'+i"
                [attr.data-collapse-toggle]="'dropdownmenu'+i"
              >
                @if (item.icon) {
                  <app-icon [name]="item.icon"/>
                }
                @if (item.label) {
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ item?.label }}</span>
                }
                <app-icon [name]="'chevron-down'"/>
              </button>
              <div [attr.id]="'dropdownmenu'+i" class="hidden space-y-2">
                <ul [attr.aria-labelledby]="'dropdownmenubutton'+i">
                  @for (subitem of item.children; track s; let s = $index; ) {
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >{{ subitem.label }}</a
                      >
                    </li>
                  }
                </ul>
              </div>
            }

            @if (item.type === 'divider') {
              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-2">
            }

          }
        </ul>
      </div>
      <!--<div
        class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20"
      >
        <a
          href="#"
          class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          data-tooltip-target="tooltip-settings"
          class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <div
          id="tooltip-settings"
          role="tooltip"
          class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
        >
          Settings page
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

      </div>-->
    </aside>
  `,
  styles: ``
})
export class SidebarComponent implements AfterViewInit {

  public menu: Array<{
    type: 'single' | 'multi' | 'divider',
    label?: string,
    icon?: string,
    children?: Array<{
      type: 'single' | 'multi' | 'divider',
      label?: string,
      icon?: string,
    }>,
  }> = [
    {
      type: 'single',
      label: 'Overview',
      icon: 'layout-dashboard'
    },
    {
      type: 'single',
      label: 'Pages',
      icon: 'book-open',
    },
    {
      type: 'multi',
      label: 'Sales',
      icon: 'shopping-basket',
      children: [
        {
          type: 'single',
          label: 'Authentication',
          icon: 'key-round',
        },
      ]
    },
    {
      type: 'divider',
    },
    {
      type: 'single',
      label: 'Authentication',
      icon: 'key-round',
    },
  ]

  ngAfterViewInit() {
    initFlowbite();
  }

}
