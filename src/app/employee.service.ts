import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from './models/Employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  private employees = new BehaviorSubject<Employee[]>([
    {
      id: 1,
      name: 'shanthan',
      department: 'IS',
      salary: 9000,
      active: true,
    },
  ]);
  getEmployees(): Observable<Employee[]> {
    return this.employees.asObservable();
  }
  addEmployee(e: Employee) {
    const current = this.employees.value;
    return this.employees.next([...current, e]);
  }
  updateEmployee(e: Employee) {
    const current = this.employees.value;
    this.employees.next([...current, e]);
  }
}
