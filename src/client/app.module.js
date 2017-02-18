import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {MaterialModule} from '@angular/material'
import 'hammerjs'

import {AppComponent} from './app.component'

export class AppModule {

}

AppModule.annotations = [new NgModule({
  imports: [BrowserModule, MaterialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})]
