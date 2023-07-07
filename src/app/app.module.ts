import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BankTransferComponent } from './components/bank-transfer/bank-transfer.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ExchangeGoldComponent } from './components/exchange-gold/exchange-gold.component';
import { CreditsComponent } from './components/credits/credits.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    MainPageComponent,
    SideBarComponent,
    BankTransferComponent,
    ExchangeComponent,
    ExchangeGoldComponent,
    CreditsComponent,
    InvestmentsComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
