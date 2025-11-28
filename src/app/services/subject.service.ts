import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface OptionalGroup {
  id: number;
  displayName: string;
  description: string;
  code: string;
}

export interface Subject {
  id: number;
  displayName: string;
  description: string;
  code: string;
  groupId?: number; // Optional link to a group
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private groupsKey = 'timetable_groups';
  private subjectsKey = 'timetable_subjects';

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    if (!localStorage.getItem(this.groupsKey)) {
      const defaultGroups: OptionalGroup[] = [
        { id: 1, displayName: 'Flight Operations', description: 'Flight training - Pilot courses and operations', code: 'FLTOP' },
        { id: 2, displayName: 'Aircraft Systems', description: 'Avionics, Airframe, Propulsion', code: 'ACSYS' }
      ];
      localStorage.setItem(this.groupsKey, JSON.stringify(defaultGroups));
    }

    if (!localStorage.getItem(this.subjectsKey)) {
      const defaultSubjects: Subject[] = [
        { id: 1, displayName: 'Aerodynamics', description: 'Principles of flight and airfoil theory', code: 'AERO', groupId: 1 },
        { id: 2, displayName: 'Meteorology', description: 'Weather systems and aviation weather', code: 'MET', groupId: 1 },
        { id: 3, displayName: 'Navigation & Flight Planning', description: 'Navigation techniques & planning', code: 'NAV', groupId: 1 },
        { id: 4, displayName: 'Avionics & Electrical Systems', description: 'Aircraft avionics systems', code: 'AVION', groupId: 2 },
        { id: 5, displayName: 'Airframe & Structures', description: 'Aircraft structure and maintenance', code: 'AFS', groupId: 2 },
        { id: 6, displayName: 'Air Law & Regulations', description: 'Aviation law, procedures and compliance', code: 'LAW' }
      ];
      localStorage.setItem(this.subjectsKey, JSON.stringify(defaultSubjects));
    }
  }

  // --- Optional Groups CRUD ---

  getGroups(): Observable<OptionalGroup[]> {
    const groups = JSON.parse(localStorage.getItem(this.groupsKey) || '[]');
    return of(groups);
  }

  createGroup(group: OptionalGroup): Observable<any> {
    const groups = JSON.parse(localStorage.getItem(this.groupsKey) || '[]');
    group.id = groups.length > 0 ? Math.max(...groups.map((g: OptionalGroup) => g.id)) + 1 : 1;
    groups.push(group);
    localStorage.setItem(this.groupsKey, JSON.stringify(groups));
    return of(group);
  }

  updateGroup(group: OptionalGroup): Observable<any> {
    const groups = JSON.parse(localStorage.getItem(this.groupsKey) || '[]');
    const index = groups.findIndex((g: OptionalGroup) => g.id === group.id);
    if (index !== -1) {
      groups[index] = group;
      localStorage.setItem(this.groupsKey, JSON.stringify(groups));
    }
    return of(group);
  }

  deleteGroup(id: number): Observable<any> {
    let groups = JSON.parse(localStorage.getItem(this.groupsKey) || '[]');
    groups = groups.filter((g: OptionalGroup) => g.id !== id);
    localStorage.setItem(this.groupsKey, JSON.stringify(groups));

    // Also remove group assignment from subjects
    let subjects = JSON.parse(localStorage.getItem(this.subjectsKey) || '[]');
    subjects = subjects.map((s: Subject) => {
      if (s.groupId === id) {
        return { ...s, groupId: undefined };
      }
      return s;
    });
    localStorage.setItem(this.subjectsKey, JSON.stringify(subjects));

    return of({ success: true });
  }

  // --- Subjects CRUD ---

  getSubjects(): Observable<Subject[]> {
    const subjects = JSON.parse(localStorage.getItem(this.subjectsKey) || '[]');
    return of(subjects);
  }

  createSubject(subject: Subject): Observable<any> {
    const subjects = JSON.parse(localStorage.getItem(this.subjectsKey) || '[]');
    subject.id = subjects.length > 0 ? Math.max(...subjects.map((s: Subject) => s.id)) + 1 : 1;
    subjects.push(subject);
    localStorage.setItem(this.subjectsKey, JSON.stringify(subjects));
    return of(subject);
  }

  updateSubject(subject: Subject): Observable<any> {
    const subjects = JSON.parse(localStorage.getItem(this.subjectsKey) || '[]');
    const index = subjects.findIndex((s: Subject) => s.id === subject.id);
    if (index !== -1) {
      subjects[index] = subject;
      localStorage.setItem(this.subjectsKey, JSON.stringify(subjects));
    }
    return of(subject);
  }

  deleteSubject(id: number): Observable<any> {
    let subjects = JSON.parse(localStorage.getItem(this.subjectsKey) || '[]');
    subjects = subjects.filter((s: Subject) => s.id !== id);
    localStorage.setItem(this.subjectsKey, JSON.stringify(subjects));
    return of({ success: true });
  }
}
