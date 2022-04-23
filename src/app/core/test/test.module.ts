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
import {ButtonComponent} from "./button/button.component";
import {CustomColorDirective} from "./button/directives/custom-color.directive";
import { DinamicTempateComponent } from './dinamic-tempate/dinamic-tempate.component';
import {RouterModule} from "@angular/router";
import { InterpolateTemplateDirective } from './dinamic-tempate/interpolate-template.directive';


@NgModule({
  declarations: [
    AccordionComponent,
    ServicesComponent,
    ServiceUserComponent,
    ServiceMobileComponent,
    ButtonComponent,
    CustomColorDirective,
    DinamicTempateComponent,
    InterpolateTemplateDirective
  ],
  exports: [
    AccordionComponent,
    ServicesComponent,
    ButtonComponent,
    DinamicTempateComponent
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
    MatSortModule,
    RouterModule
  ]
})
export class TestModule {
}
