import { Component } from '@angular/core';

export interface ClassSubject {
    id: number;
    name: string;
    code: string;
    expanded: boolean;
    totalPeriods: number;
    slots: any[]; // Placeholder for now
    teachers: string[];
}

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
    classes = ['PPL Batch A', 'PPL Batch B', 'CPL Batch A', 'CPL Batch B', 'A&P Morning', 'A&P Evening', 'Simulator Morning'];
    selectedClass: string | null = null;

    // Mock subjects for the selected class
    subjects: ClassSubject[] = [
        { id: 1, name: 'Aerodynamics', code: 'AERO', expanded: true, totalPeriods: 6, slots: [], teachers: ['Alexander J. Carter'] },
        { id: 2, name: 'Navigation & Flight Planning', code: 'NAV', expanded: false, totalPeriods: 7, slots: [], teachers: ['Sarah M. Lee'] },
        { id: 3, name: 'Meteorology', code: 'MET', expanded: false, totalPeriods: 6, slots: [], teachers: ['David P. Martinez'] },
        { id: 4, name: 'Flight Training (Dual/Solo)', code: 'FLIGHT', expanded: false, totalPeriods: 10, slots: [], teachers: ['James S. Fletcher'] },
        { id: 5, name: 'Avionics & Electrical Systems', code: 'AVION', expanded: false, totalPeriods: 8, slots: [], teachers: ['Rebecca K. Ng'] }
    ];

    days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];
    periods = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    selectClass(cls: string) {
        this.selectedClass = cls;
        // In a real app, we would fetch subjects for this class here
    }

    toggleSubject(subject: ClassSubject) {
        subject.expanded = !subject.expanded;
    }

    addTeacher(subject: ClassSubject) {
        // Mock functionality
        const newTeacher = `New Teacher ${subject.teachers.length + 1}`;
        subject.teachers.push(newTeacher);
    }

    removeTeacher(subject: ClassSubject, index: number) {
        subject.teachers.splice(index, 1);
    }
}
