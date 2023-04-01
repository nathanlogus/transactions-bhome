import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { CoreModule } from './core/core.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './pages/transfer/confirmation-modal/confirmation-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TransferComponent,
    TransactionListComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BbUIModule,
    CoreModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
