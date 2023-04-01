import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-toast',
  templateUrl: './confirmation-toast.component.html',
  styleUrls: ['./confirmation-toast.component.css']
})
export class ConfirmationToastComponent {
  @Input('show') show: boolean = true;
  @Input('message') message: string = '';

}
