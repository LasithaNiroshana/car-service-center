import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})
export class AddCarComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit(); // Emit close event to the parent component
    this.isOpen=false;
  }
}
