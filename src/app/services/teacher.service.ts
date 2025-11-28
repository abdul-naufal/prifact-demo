import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Teacher {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private storageKey = 'timetable_teachers';

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    if (!localStorage.getItem(this.storageKey)) {
      const defaultTeachers: Teacher[] = [
        { id: 1, firstName: 'Alexander', middleName: 'J.', lastName: 'Carter', code: 'alex.carter@upskillair.edu' },
        { id: 2, firstName: 'Sarah', middleName: 'M.', lastName: 'Lee', code: 'sarah.lee@upskillair.edu' },
        { id: 3, firstName: 'David', middleName: 'P.', lastName: 'Martinez', code: 'david.martinez@upskillair.edu' },
        { id: 4, firstName: 'Rebecca', middleName: 'K.', lastName: 'Ng', code: 'rebecca.ng@upskillair.edu' },
        { id: 5, firstName: 'James', middleName: 'S.', lastName: 'Fletcher', code: 'james.fletcher@upskillair.edu' }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(defaultTeachers));
    }
  }

  getTeachers(): Observable<Teacher[]> {
    const teachers = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return of(teachers);
  }

  createTeacher(teacher: Teacher): Observable<any> {
    const teachers = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    teacher.id = teachers.length > 0 ? Math.max(...teachers.map((t: Teacher) => t.id)) + 1 : 1;
    teachers.push(teacher);
    localStorage.setItem(this.storageKey, JSON.stringify(teachers));
    return of(teacher);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    const teachers = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    const index = teachers.findIndex((t: Teacher) => t.id === teacher.id);
    if (index !== -1) {
      teachers[index] = teacher;
      localStorage.setItem(this.storageKey, JSON.stringify(teachers));
    }
    return of(teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    let teachers = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    teachers = teachers.filter((t: Teacher) => t.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(teachers));
    return of({ success: true });
  }
}
