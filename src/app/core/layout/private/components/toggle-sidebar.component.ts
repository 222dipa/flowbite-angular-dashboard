import {Component, OnInit} from '@angular/core';
import {Drawer} from "flowbite";

@Component({
  selector: 'app-toggle-sidebar',
  standalone: true,
  imports: [],
  template: `
    <button
      type="button"
      data-drawer-target="drawer-navigation"
      data-drawer-toggle="drawer-navigation"
      aria-controls="drawer-navigation"
      (click)="toggleDrawer()"
      class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <svg
        aria-hidden="true"
        class="hidden w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Toggle sidebar</span>
    </button>
  `,
  styles: ``
})
export class ToggleSidebarComponent implements OnInit {
  private drawer: Drawer | undefined;

  ngOnInit() {
    const $targetEl = document.getElementById('drawer-navigation');
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses: 'bg-gray-50/10 dark:bg-gray-900/40 fixed inset-0 z-30 backdrop-blur-sm',
      onHide: () => {
      },
      onShow: () => {
      },
      onToggle: () => {
      },
    };
    this.drawer = new Drawer($targetEl, options);
  }

  toggleDrawer() {
    if (this.drawer?._visible) {
      this.drawer.hide();
    } else {
      this.drawer?.show();
    }
  }
}
