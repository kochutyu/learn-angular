import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from './accordion/accordion.component';
import {ServicesComponent} from './service/services.component';
import {ToggleAccordionModule} from "./accordion/directives/toggle-accordion/toggle-accordion.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ServiceUserComponent} from "./service/modules/service-user/service-user.component";
import { ServiceMobileComponent } from './service/modules/service-mobile/service-mobile.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    AccordionComponent,
    ServicesComponent,
    ServiceUserComponent,
    ServiceMobileComponent
  ],
  exports: [
    AccordionComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ToggleAccordionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule
  ]
})
export class TestModule {
}
