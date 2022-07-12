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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './containers/login/login.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component'
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    WizkidListComponent,
    WizkidItemComponent,
    HeaderComponent,
    NewWizkidComponent,
    LoginComponent,
    UserOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [WizkidsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
