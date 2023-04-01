import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Transaction {
  id: string;
  merchant: Mechant;
  dates: Date;
  categoryCode: string;
  transaction: TransactionValue;
}

export interface Mechant {
  name: string;
  accountNumber: string;
}

export interface Date {
  valueDate: string | number;
}

export interface TransactionValue {
  type: string;
  creditDebitIndicator: string;
  amountCurrency: AmountCurrency;
}

export interface AmountCurrency {
  currencyCode: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  apiUrl = 'https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions';

  constructor(private http: HttpClient) { }

  getAllTransactions() {
    // return this.http.get<Transaction[]>(this.apiUrl); // CORRECT API CALL (but not working since due to CORS policy)
    return this.http.get<Transaction[]>("assets/json/transactions.json");
  }
}
