import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './auth/auth-guard';
import { loginGuard } from './auth/login-guard';

export const routes: Routes = [

    { path:"",redirectTo:"login", pathMatch:"full"},
    { path: "login", component:Login, canActivate:[loginGuard]},
    { path: "home", component:Home, canActivate:[authGuard]},
    { path: "dashboard", component:Dashboard, canActivate:[authGuard]}
];
