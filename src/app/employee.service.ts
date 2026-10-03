import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './models/Employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  employees = new BehaviorSubject<Employee>();
}
