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
    classes = ['5A', '5B', '6A', '6B', '7A', '7B', '8A', '8B', '9A', '9B', '10A', '10B'];
    selectedClass: string | null = null;

    // Mock subjects for the selected class
    subjects: ClassSubject[] = [
        { id: 1, name: 'English', code: 'ENG', expanded: true, totalPeriods: 6, slots: [], teachers: ['Mittie Lida Bess (Prithvi.s)'] },
        { id: 2, name: 'Mathematics', code: 'MATH', expanded: false, totalPeriods: 7, slots: [], teachers: ['John Doe (Math.d)'] },
        { id: 3, name: 'Science', code: 'SCI', expanded: false, totalPeriods: 6, slots: [], teachers: [] },
        { id: 4, name: 'Social Studies', code: 'SST', expanded: false, totalPeriods: 5, slots: [], teachers: ['Jane Smith (SST.j)'] },
        { id: 5, name: 'Hindi', code: 'HIN', expanded: false, totalPeriods: 4, slots: [], teachers: [] }
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
