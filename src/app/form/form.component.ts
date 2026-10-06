import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/Employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
  ) {}

  editingId: number | null = null;

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

  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.editingId = Number(idParam);
    }
  }
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
