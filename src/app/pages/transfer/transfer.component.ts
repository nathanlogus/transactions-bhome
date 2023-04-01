import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  myAccountBalance = 5824.76;
  showConfirmationModal = false;
  showConfirmationToast = false;
  transferForm = this.fb.group({
    balance: [{ value: "My Personal Account: " + formatCurrency(this.myAccountBalance, 'en-US', "€ "), disabled: true }, Validators.required],
    account: [, Validators.required],
    amount: [, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  submitForm(event: any) {
    if (this.transferForm.valid) {
      this.toggleModal();
    }
  }

  ammountInvalid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = control.value > this.myAccountBalance + 500 || control.value < 0;
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  toggleModal() {
    this.showConfirmationModal = !this.showConfirmationModal;
  }

  toggleToast() {
    this.showConfirmationToast = true;
    setTimeout(() => {
      this.showConfirmationToast = false;
    }, 3000);
  }

  sendTransfer() {
    // TODO send transfer to server and update balance in myAccountBalance
    this.transferForm.reset();
    this.transferForm.controls.balance.setValue("My Personal Account: " + formatCurrency(this.myAccountBalance, 'en-US', "€ "));
    this.toggleModal();
    this.toggleToast();
  }
}