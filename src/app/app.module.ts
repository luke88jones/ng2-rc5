import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { AsyncNgModuleLoader, load } from './utils/async-ng-module-loader';

import { AppComponent } from './app.component';

import { HomeModule } from "./features/home/home.module";

const routeConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "home",
    component: HomeModule
  },
  {
    path: "lazy",
    loadChildren: load(() =>
      new Promise(resolve => {
        (require as any).ensure(["./features/lazy/lazy.module"], () => 
          resolve(require('./features/lazy/lazy.module'))
        )
      }), 'LazyModule')
  }
];

const appRoutingProviders = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}