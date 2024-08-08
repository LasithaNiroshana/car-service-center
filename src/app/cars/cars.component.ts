import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit{
  isModalOpen = false;
  isAddCarModalOpen = false;
  jobs = [
    { job: '#3066', date: 'Jan 6, 2022' },
    { job: '#3065', date: 'Jan 5, 2022' },
    // Add more jobs as needed
  ];

  ngOnInit(){
    this.isAddCarModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
  }

  openAddCar() {
    this.isAddCarModalOpen = true;
  }

  closeAddCar() {
    this.isAddCarModalOpen = false; // This should close the modal
  }

}
