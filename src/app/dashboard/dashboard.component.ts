import { Component } from '@angular/core';

interface Job {
  jobId: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  carsInServiceCenter = 10; // Example value
  jobsInProgress: Job[] = [
    { jobId: '1234', status: 'In Progress' },
    { jobId: '3065', status: 'In Progress' },
    { jobId: '9876', status: 'In Progress' },
    // Add more jobs as needed
  ];
}
