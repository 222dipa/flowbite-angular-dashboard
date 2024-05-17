import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./core/layout/public/public.component"),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import("./core/auth/login/login.component")
      }
    ]
  },
  {
    path: "app",
    loadComponent: () => import("./core/layout/private/private.component"),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import("./features/dashboard/dashboard.component"),
      }
    ]
    // canActivate: [
    //   () => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    // ],
  },
];
