import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-show-history',
  templateUrl: './show-history.component.html',
  styleUrl: './show-history.component.scss'
})
export class ShowHistoryComponent {
  @Input() isOpen = false;
  @Input() jobs: { job: string, date: string }[] = [];

  close() {
    this.isOpen = false;
  }
}
