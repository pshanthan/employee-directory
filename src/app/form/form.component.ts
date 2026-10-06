import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private employeeService: EmployeeService) {}
  employeeForm = new FormGroup({
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
  });
  onSubmit() {
    const raw = this.employeeForm.getRawValue();
    const emp: Employee = {
      name: raw.name,
      department: raw.department,
      salary: Number(raw.salary),
      active: Boolean(raw.active),
    };
    this.employeeService.addEmployee(emp);
  }
}
