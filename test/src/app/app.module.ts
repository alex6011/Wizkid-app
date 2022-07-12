import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WizkidsService } from './services/wizkids.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { WizkidListComponent } from './containers/wizkid-list/wizkid-list.component';
import { WizkidItemComponent } from './components/wizkid-item/wizkid-item.component';
import { HeaderComponent } from './components/header/header.component';
import { NewWizkidComponent } from './containers/new-wizkid/new-wizkid.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    WizkidListComponent,
    WizkidItemComponent,
    HeaderComponent,
    NewWizkidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [WizkidsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
