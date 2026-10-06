import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/Employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  employees: Employee[] = [];
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((e) => (this.employees = e));
  }
}
