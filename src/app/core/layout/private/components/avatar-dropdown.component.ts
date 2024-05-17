import {Component, OnInit} from '@angular/core';
import {Dropdown, DropdownOptions} from "flowbite";

@Component({
  selector: 'app-avatar-dropdown',
  standalone: true,
  imports: [],
  template: `
    <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
            class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:underline underline-offset-2 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
            type="button">
      <span class="sr-only">Open user menu</span>
      <img class="w-8 h-8 me-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
           alt="user photo">
      Bonnie Green
      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4"/>
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownAvatarName"
         class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div class="font-medium ">Pro User</div>
        <div class="truncate">nameatflowbite.com</div>
      </div>
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
      </ul>
      <div class="py-2">
        <a href="#"
           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
          out</a>
      </div>
    </div>
  `,
  styles: ``
})
export class AvatarDropdownComponent implements OnInit{

  ngOnInit() {
    const options: DropdownOptions = {
      placement: 'bottom',
      triggerType: 'hover',
      offsetSkidding: 0,
      offsetDistance: 10,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {},
    };
    const dropdown = new Dropdown(document.getElementById('dropdownAvatarName'), document.getElementById('dropdownAvatarNameButton'), options);
  }
}
