import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TransferItem {
  balance: string;
  account: string;
  amount: number;
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Input('show') show: boolean = true;
  @Input('transfer') transferItem: any;
  @Output('close') onClose = new EventEmitter();
  @Output('cancel') onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.init()
  }

  ngOnChanges(): void {
    this.init()
  }

  disableBodyScrolling() {
    document.body.style.setProperty('overflow', 'hidden')
  }

  enableBodyScrolling() {
    document.body.style.setProperty('overflow', 'scroll')
  }

  triggerCancel() {
    this.onCancel.emit();
  }

  init() {
    if (this.show)
      this.disableBodyScrolling()
  }

  close() {
    this.enableBodyScrolling()
    this.onClose.emit()
  }
}
