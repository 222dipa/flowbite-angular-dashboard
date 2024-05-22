import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BookOpen, ChevronDown, KeyRound, LayoutDashboard, LucideAngularModule, ShoppingBasket} from "lucide-angular";


const icons = {
  LayoutDashboard,
  BookOpen,
  ShoppingBasket,
  KeyRound,
  ChevronDown
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(icons))]
};


