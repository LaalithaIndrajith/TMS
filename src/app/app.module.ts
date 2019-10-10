import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSwitcheryModule } from "angular-switchery-ios";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AddUserComponent } from './Add-User/Add-User.component';
import { UserLookupComponent } from './User-Lookup/User-Lookup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './material-module';
import { MatTableModule } from '@angular/material/table';
import { CompareValidatorDirective } from './shared/compare-validator.directive';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AddUserComponent,
      UserLookupComponent,
      CompareValidatorDirective
   ],
   imports: [
      RouterModule.forRoot(appRoutes),
      NgSwitcheryModule,
      FontAwesomeModule,
      AgGridModule.withComponents([]),
      HttpClientModule,
      [BrowserAnimationsModule],
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      MatNativeDateModule,
      DemoMaterialModule,
      MatTableModule,
      MatPaginatorModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
