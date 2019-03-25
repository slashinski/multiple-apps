import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';

// List of providers - new
const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    View2Component,
    View1Component
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
export class App2SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers,
    }
  }
}

