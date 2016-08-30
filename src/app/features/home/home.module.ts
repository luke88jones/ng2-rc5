import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import {RouterModule} from "@angular/router";

const routeConfig = [
  {
    path: "",
    component: HomeComponent
  }
];


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    RouterModule, 
    RouterModule.forChild(routeConfig)
  ],
  providers: [],
  exports: [ HomeComponent ],
  entryComponents: [ HomeComponent ]
})
export class HomeModule {

}