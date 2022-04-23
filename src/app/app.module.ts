import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {ToggleAccordionModule} from "./core/directives/toggle-accordion/toggle-accordion.module";
import {TestModule} from "./core/test/test.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToggleAccordionModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
