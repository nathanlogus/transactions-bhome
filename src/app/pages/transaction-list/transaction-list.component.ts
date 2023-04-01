import { Component, OnInit } from '@angular/core';
import { debounceTime, tap } from 'rxjs/operators';
import { Transaction, TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  dataToDisplay: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.fetchData('');
  }

  filterData(event: string) {
    this.fetchData(event);
  }

  fetchData(filterString: string){
    this.transactionService.getAllTransactions().pipe(
      debounceTime(500), // wait 500ms after the last event before emitting last event
      tap((result) => {
        result = result.filter((item) => item.merchant.name.toLowerCase().includes(filterString.toLowerCase()));
        result.sort((a, b) => new Date(b.dates.valueDate).getTime() - new Date(a.dates.valueDate).getTime());
        this.dataToDisplay = result;
      }),).subscribe();
  }

}