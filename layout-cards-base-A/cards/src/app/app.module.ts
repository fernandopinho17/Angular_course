import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';

import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { ClienteInfosCardComponent } from './cliente-infos-card/cliente-infos-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    BalanceCardComponent,
    ClienteInfosCardComponent,
    CreditCardComponent,
    DebitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
