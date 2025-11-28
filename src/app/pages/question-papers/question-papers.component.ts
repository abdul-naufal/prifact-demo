import { Component } from '@angular/core';

interface QuestionPaper {
  title: string;
  class: string;
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
      title: 'Mid Term Exam 2023',
      class: '10',
      subject: 'Mathematics',
      totalMarks: 100,
      createdBy: 'TestTeacher',
      lastUpdated: new Date('2023-10-15'),
      status: 'Published'
    },
    {
      title: 'Unit Test 1',
      class: '9',
      subject: 'Science',
      totalMarks: 50,
      createdBy: 'TestTeacher',
      lastUpdated: new Date('2023-09-20'),
      status: 'Draft'
    },
    {
      title: 'Final Exam Prep',
      class: '12',
      subject: 'Physics',
      totalMarks: 70,
      createdBy: 'Admin',
      lastUpdated: new Date('2023-11-01'),
      status: 'Published'
    }
  ];

  constructor() { }
}
