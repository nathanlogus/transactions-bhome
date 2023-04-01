import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  myAccountBalance = 5824.76;
  transferForm = this.fb.group({
    balance: [{ value: "My Personal Account: " + formatCurrency(this.myAccountBalance, 'en-US', "€ "), disabled: true }, Validators.required],
    account: ['', Validators.required],
    amount: [0, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  submitForm(event: any) {
    console.warn(this.transferForm.value);
  }
}
