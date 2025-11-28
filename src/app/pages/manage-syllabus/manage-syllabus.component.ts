import { Component } from '@angular/core';

interface Syllabus {
  id: number;
  title: string;
  description: string;
  isLocked?: boolean; // To simulate the locked delete icon seen in the screenshot
}

@Component({
  selector: 'app-manage-syllabus',
  templateUrl: './manage-syllabus.component.html',
  styleUrls: ['./manage-syllabus.component.css']
})
export class ManageSyllabusComponent {
  syllabusList: Syllabus[] = [
    { id: 1, title: '10th Class CBSE', description: '10th Class CBSE Syllabus', isLocked: true },
    { id: 2, title: '9th Class CBSE', description: '9th Class CBSE Syllabus' },
    { id: 3, title: '8th Class CBSE', description: '8th Class CBSE Syllabus' },
    { id: 4, title: '12th Science Stream', description: 'Physics, Chemistry, Math, Biology' },
    { id: 5, title: '12th Commerce Stream', description: 'Accounts, Economics, Business Studies' },
    { id: 6, title: '11th Science Stream', description: 'Physics, Chemistry, Math, Computer Science' },
    { id: 7, title: 'Primary School (1-5)', description: 'General Syllabus for Primary' },
    { id: 8, title: 'Middle School (6-8)', description: 'General Syllabus for Middle School', isLocked: true },
    { id: 9, title: 'Kindergarten', description: 'Basic learning syllabus' },
    { id: 10, title: 'Special Education', description: 'Adapted curriculum' }
  ];
}
