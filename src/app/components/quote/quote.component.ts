import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;

      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      };

      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1000);
  }
}
