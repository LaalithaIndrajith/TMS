import { UserLookupComponent } from './User-Lookup/User-Lookup.component';
import { AddUserComponent } from './Add-User/Add-User.component';
import { LoginComponent } from './Login/Login.component';
import { Routes } from "@angular/router";


export const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "AddUser", component: AddUserComponent },
  { path: "LookupUser", component: UserLookupComponent },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];
