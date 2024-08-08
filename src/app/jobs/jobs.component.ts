import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  isModalOpen = false;

  openModal(){
    this.isModalOpen = true;
    console.log('dc,mfb mn, klmvlkdfv')
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
