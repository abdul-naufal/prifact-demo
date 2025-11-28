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
    classes = ['PPL-2023-A', 'PPL-2023-B', 'CPL-2023-A', 'CPL-2023-B', 'ATPL-2024-A', 'IR-2024-A', 'FI-2024-A'];
    selectedClass: string | null = 'PPL-2023-A';
    selectedSubject: ClassSubject | null = null;

    // Aviation subjects for the selected class
    subjects: ClassSubject[] = [
        { id: 1, name: 'Aerodynamics', code: 'AERO', expanded: false, totalPeriods: 6, slots: [], teachers: ['Alexander J. Carter'] },
        { id: 2, name: 'Navigation & Flight Planning', code: 'NAV', expanded: false, totalPeriods: 7, slots: [], teachers: ['Sarah M. Lee'] },
        { id: 3, name: 'Meteorology', code: 'MET', expanded: false, totalPeriods: 6, slots: [], teachers: ['David P. Martinez'] },
        { id: 4, name: 'Flight Training (Dual/Solo)', code: 'FLIGHT', expanded: false, totalPeriods: 10, slots: [], teachers: ['James S. Fletcher'] },
        { id: 5, name: 'Avionics & Electrical Systems', code: 'AVION', expanded: false, totalPeriods: 8, slots: [], teachers: ['Rebecca K. Ng'] }
    ];

    days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];
    periods = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor() {
        // Select first subject by default for demo
        if (this.subjects.length > 0) {
            this.selectedSubject = this.subjects[0];
        }
    }

    selectClass(cls: string) {
        this.selectedClass = cls;
        // In a real app, we would fetch subjects for this class here
        this.selectedSubject = null; // Reset selection
    }

    selectSubject(subject: ClassSubject) {
        this.selectedSubject = subject;
    }

    addClass() {
        console.log('Add class clicked');
    }

    // Track selected slots with cell numbers
    selectedSlots: Set<string> = new Set();

    // Get cell number based on day and period
    getCellNumber(day: string, period: number): number {
        const dayIndex = this.days.indexOf(day);
        const periodIndex = period - 1; // periods start from 1
        return dayIndex * this.periods.length + periodIndex + 1;
    }

    // Get all selected cell numbers sorted
    get allowOnValues(): string {
        const cellNumbers: number[] = [];
        this.selectedSlots.forEach(key => {
            const [day, periodStr] = key.split('-');
            const period = parseInt(periodStr);
            cellNumbers.push(this.getCellNumber(day, period));
        });
        return cellNumbers.sort((a, b) => a - b).join(' ');
    }

    // Helper to check if a slot is selected
    isSlotSelected(day: string, period: number): boolean {
        return this.selectedSlots.has(`${day}-${period}`);
    }

    toggleSlot(day: string, period: number) {
        const key = `${day}-${period}`;
        if (this.selectedSlots.has(key)) {
            this.selectedSlots.delete(key);
        } else {
            this.selectedSlots.add(key);
        }
    }

    addTeacher(subject: ClassSubject) {
        // Mock functionality
        const newTeacher = `New Instructor ${subject.teachers.length + 1}`;
        subject.teachers.push(newTeacher);
    }

    removeTeacher(subject: ClassSubject, index: number) {
        subject.teachers.splice(index, 1);
    }
}
