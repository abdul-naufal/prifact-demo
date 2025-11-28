import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-paper-create',
  templateUrl: './question-paper-create.component.html',
  styleUrls: ['./question-paper-create.component.css']
})
export class QuestionPaperCreateComponent {
  selectedClass: string = '';
  selectedSubject: string = '';
  title: string = '';

  classes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  subjects: string[] = [];

  allSubjects = [
    'Mathematics', 'Science', 'English', 'Social Studies',
    'Physics', 'Chemistry', 'Biology', 'History',
    'Geography', 'Computer Science', 'Hindi'
  ];

  constructor(private router: Router) { }

  onClassChange() {
    // When class changes, populate subjects (in real app, this would be based on class)
    this.subjects = this.allSubjects;
    this.selectedSubject = ''; // Reset subject selection
  }

  onSave() {
    if (this.selectedClass && this.selectedSubject && this.title) {
      // Generate a temporary ID (in real app, this would come from backend)
      const tempId = Date.now();

      // Store data in localStorage for persistence
      localStorage.setItem('questionPaperData', JSON.stringify({
        title: this.title,
        class: this.selectedClass,
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
