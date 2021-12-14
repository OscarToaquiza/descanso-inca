import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentModule } from "./components/component.module";
import { PagesModule } from "./pages/pages.module";
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    PagesModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
