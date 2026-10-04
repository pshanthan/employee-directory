import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private employeeService: EmployeeService) {}
  employeeForm = new BehaviorSubject([
    {
      name: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      department: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      salary: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      active: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    },
  ]);
  onSubmit() {}
}
