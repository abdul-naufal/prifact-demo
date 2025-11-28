import { Component } from '@angular/core';

interface QuestionPaper {
  title: string;
  course: string; // course name or training level
  subject: string;
  totalMarks: number;
  createdBy: string;
  lastUpdated: Date;
  status: 'Draft' | 'Published';
}

@Component({
  selector: 'app-question-papers',
  templateUrl: './question-papers.component.html',
  styleUrls: ['./question-papers.component.css']
})
export class QuestionPapersComponent {
  questionPapers: QuestionPaper[] = [
    {
      title: 'PPL Written Exam - Air Law & Regulations',
      course: 'PPL (Private Pilot License)',
      subject: 'Air Law & Regulations',
      totalMarks: 100,
      createdBy: 'alex.carter@upskillair.edu',
      lastUpdated: new Date('2024-05-01'),
      status: 'Published'
    },
    {
      title: 'Avionics Systems Assessment',
      course: 'Aircraft Systems - Avionics Module',
      subject: 'Avionics & Electrical Systems',
      totalMarks: 70,
      createdBy: 'rebecca.ng@upskillair.edu',
      lastUpdated: new Date('2024-06-10'),
      status: 'Draft'
    },
    {
      title: 'Aircraft Maintenance - Structural Inspection',
      course: 'A&P - Airframe & Powerplant',
      subject: 'Airframe & Structures',
      totalMarks: 80,
      createdBy: 'david.martinez@upskillair.edu',
      lastUpdated: new Date('2024-03-18'),
      status: 'Published'
    }
  ];

  constructor() { }
}
