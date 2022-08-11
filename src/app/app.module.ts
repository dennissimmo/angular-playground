import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HoverDirective} from "./directives/hover.directive";
import {UnlessDirective} from "./directives/unless.directive";
import {DropdownDirective} from "./directives/dropdown.directive";
import {ClickOutsideDirective} from "./directives/clickOutside.directive";

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    UnlessDirective,
    DropdownDirective,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
