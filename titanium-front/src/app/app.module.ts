import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {StocksComponent} from './stocks/stocks.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TitaniumService} from "./titanium.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StocksComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [TitaniumService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
