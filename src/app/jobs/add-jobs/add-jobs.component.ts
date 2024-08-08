import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.scss'
})
export class AddJobsComponent {
  @Input() isOpen = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  jobId = '';
  vehicleNo = '';
  customer = '';
  serviceType = '';
  description = '';
  assignedTo = '';
  status = '';

  closeModal() {
    this.closeModalEvent.emit(); // Notify parent to close the modal
  }

  onSubmit() {
    // Handle form submission logic here
    // e.g., send data to a server or update local state
    console.log('Job added:', {
      jobId: this.jobId,
      vehicleNo: this.vehicleNo,
      customer: this.customer,
      serviceType: this.serviceType,
      description: this.description,
      assignedTo: this.assignedTo,
      status: this.status,
    });
    this.closeModal(); // Close modal after submission
  }
}
