import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputChange.emit(filterValue);
  }
}
