import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface SyllabusSubject {
  id: number;
  displayOrder: number;
  code: string;
  title: string;
  hoursPerWeek: number;
  totalHours: number;
  internalAssessmentMark: number;
  examHours: number;
  examMark: number;
  isTheory: string;
  subjectType: string;
}

@Component({
  selector: 'app-manage-syllabus-detail',
  templateUrl: './manage-syllabus-detail.component.html',
  styleUrls: ['./manage-syllabus-detail.component.css']
})
export class ManageSyllabusDetailComponent implements OnInit {
  syllabusId: number | null = null;
  syllabusTitle: string = '10th Class CBSE';
  syllabusDescription: string = '10th Class CBSE Syllabus';

  subjects: SyllabusSubject[] = [
    {
      id: 1,
      displayOrder: 1,
      code: 'ENG1',
      title: 'English Communicative',
      hoursPerWeek: 20,
      totalHours: 120,
      internalAssessmentMark: 50,
      examHours: 3,
      examMark: 100,
      isTheory: '-',
      subjectType: '-'
    },
    {
      id: 2,
      displayOrder: 1,
      code: 'ENG2',
      title: 'English Language and Literature',
      hoursPerWeek: 20,
      totalHours: 120,
      internalAssessmentMark: 50,
      examHours: 3,
      examMark: 100,
      isTheory: '-',
      subjectType: '-'
    },
    {
      id: 3,
      displayOrder: 1,
      code: 'HINDI1',
      title: 'Hindi Course-A',
      hoursPerWeek: 20,
      totalHours: 120,
      internalAssessmentMark: 50,
      examHours: 3,
      examMark: 100,
      isTheory: '-',
      subjectType: '-'
    },
    {
      id: 4,
      displayOrder: 1,
      code: 'Hindi2',
      title: 'Hindi Course-B',
      hoursPerWeek: 20,
      totalHours: 120,
      internalAssessmentMark: 50,
      examHours: 3,
      examMark: 100,
      isTheory: '-',
      subjectType: '-'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.syllabusId = +id;
      }
    });
  }
}
