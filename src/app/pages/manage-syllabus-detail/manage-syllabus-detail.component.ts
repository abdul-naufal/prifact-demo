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
  syllabusTitle: string = 'PPL - Private Pilot License';
  syllabusDescription: string = 'Private pilot licensing syllabus covering flight, theory, and navigation modules';

  subjects: SyllabusSubject[] = [
    {
      id: 1,
      displayOrder: 1,
      code: 'AERO101',
      title: 'Aerodynamics Fundamentals',
      hoursPerWeek: 8,
      totalHours: 48,
      internalAssessmentMark: 20,
      examHours: 3,
      examMark: 100,
      isTheory: 'Theory',
      subjectType: 'Core'
    },
    {
      id: 2,
      displayOrder: 2,
      code: 'NAV202',
      title: 'Navigation & Flight Planning',
      hoursPerWeek: 6,
      totalHours: 36,
      internalAssessmentMark: 20,
      examHours: 3,
      examMark: 100,
      isTheory: 'Theory',
      subjectType: 'Core'
    },
    {
      id: 3,
      displayOrder: 3,
      code: 'MET104',
      title: 'Aviation Meteorology',
      hoursPerWeek: 4,
      totalHours: 24,
      internalAssessmentMark: 20,
      examHours: 3,
      examMark: 100,
      isTheory: 'Theory',
      subjectType: 'Core'
    },
    {
      id: 4,
      displayOrder: 4,
      code: 'PRAC301',
      title: 'Flight Training - Dual & Solo',
      hoursPerWeek: 12,
      totalHours: 72,
      internalAssessmentMark: 50,
      examHours: 0,
      examMark: 0,
      isTheory: 'Practical',
      subjectType: 'Practical'
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
