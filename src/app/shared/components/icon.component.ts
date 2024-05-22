import {Component, Input} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  template: `
    <lucide-icon [name]="name" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></lucide-icon>
  `,
  styles: ``
})
export class IconComponent {
  @Input() name: string = '';
}
