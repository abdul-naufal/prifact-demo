import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-paper-create',
  templateUrl: './question-paper-create.component.html',
  styleUrls: ['./question-paper-create.component.css']
})
export class QuestionPaperCreateComponent implements OnInit {
  selectedCourse: string = '';
  selectedSubject: string = '';
  title: string = '';

  courses = ['PPL', 'CPL', 'IR', 'A&P', 'Avionics', 'Type Rating - Cessna 172'];
  subjects: string[] = [];

  subjectsByCourse: { [course: string]: string[] } = {
    'PPL': [
      'Aerodynamics', 'Air Law & Regulations', 'Navigation & Flight Planning',
      'Meteorology', 'Human Performance', 'Flight Training (Dual)', 'Flight Training (Solo)'
    ],
    'CPL': [
      'Aerodynamics - Advanced', 'Air Law & Commercial Operations', 'Navigation & Flight Planning (Advanced)',
      'Meteorology', 'Flight Training - Commercial Procedures', 'Performance & Planning'
    ],
    'IR': [
      'Instrument Procedures', 'Instrument Flight Rules (IFR) Navigation', 'Avionics & Instruments'
    ],
    'A&P': [
      'Airframe & Structures', 'Powerplant', 'Maintenance Practices', 'Aircraft Systems (Electrical, Hydraulic)'
    ],
    'Avionics': [
      'Avionics & Electrical Systems', 'Navigation Systems', 'Onboard Instruments & Troubleshooting'
    ],
    'Type Rating - Cessna 172': [
      'C172 Systems & Operations', 'Type-specific Procedures', 'Performance & Weight & Balance'
    ]
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // Default to first course so the subject dropdown is pre-populated
    if (!this.selectedCourse && this.courses && this.courses.length > 0) {
      this.selectedCourse = this.courses[0];
      this.onCourseChange();
    }
  }

  onCourseChange() {
    // When course changes, populate subjects for that course
    this.subjects = this.subjectsByCourse[this.selectedCourse] || [];
    this.selectedSubject = ''; // Reset subject selection
  }

  onSave() {
    if (this.selectedCourse && this.selectedSubject && this.title) {
      // Generate a temporary ID (in real app, this would come from backend)
      const tempId = Date.now();

      // Store data in localStorage for persistence
      localStorage.setItem('questionPaperData', JSON.stringify({
        title: this.title,
        course: this.selectedCourse,
        subject: this.selectedSubject
      }));

      // Navigate to design page
      this.router.navigate(['/question-papers', tempId, 'design']);
    }
  }

  onCancel() {
    this.router.navigate(['/question-papers']);
  }
}
