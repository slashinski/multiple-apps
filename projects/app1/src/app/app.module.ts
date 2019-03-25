import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

// List of providers - new
const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

// new
@NgModule({})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers,
    }
  }
}
