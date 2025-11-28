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
    { id: 1, title: 'PPL (Private Pilot License)', description: 'Private pilot training syllabus and completion criteria', isLocked: true },
    { id: 2, title: 'CPL (Commercial Pilot License)', description: 'Commercial pilot syllabus with flight and theory modules' },
    { id: 3, title: 'Instrument Rating (IR)', description: 'Instrument rating modules and requirements' },
    { id: 4, title: 'Airframe & Powerplant (A&P)', description: 'Aircraft maintenance theory and practical training' },
    { id: 5, title: 'Avionics Certificate', description: 'Avionics systems, diagnostics and maintenance' },
    { id: 6, title: 'Flight Instructor Course', description: 'Instructor training syllabus and evaluation' },
    { id: 7, title: 'Simulator Training Program', description: 'Simulator syllabus for type ratings' },
    { id: 8, title: 'Aviation Safety Management', description: 'Safety protocols and emergency procedures', isLocked: true },
    { id: 9, title: 'Aircraft Systems Specialist', description: 'Specialized modules for industry technicians' },
    { id: 10, title: 'Ground Operations & Dispatch', description: 'Ground handling and operational dispatch training' }
  ];
}
