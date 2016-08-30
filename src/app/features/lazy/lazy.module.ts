import { NgModule } from '@angular/core';
import { LazyComponent } from "./lazy.component";

import {RouterModule} from "@angular/router";

const routeConfig = [
    {
        path: "",
        component: LazyComponent
    }
]

@NgModule({
  imports: [
      RouterModule.forChild(routeConfig)
  ],
  declarations: [ LazyComponent ]
})
export class LazyModule {

}