import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Question {
  id: number;
  type: 'multiple-choice' | 'descriptive' | 'file-upload';
  text: string;
  marks: number;
  options?: string[];
  collapsed?: boolean;
}

interface Section {
  id: number;
  name: string;
  description: string;
  questions: Question[];
  collapsed?: boolean;
}

@Component({
  selector: 'app-question-paper-design',
  templateUrl: './question-paper-design.component.html',
  styleUrls: ['./question-paper-design.component.css']
})
export class QuestionPaperDesignComponent implements OnInit {
  questionPaperTitle: string = '';
  questionPaperCourse: string = '';
  questionPaperSubject: string = '';
  sections: Section[] = [];
  totalMarks: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Get data from localStorage
    const storedData = localStorage.getItem('questionPaperData');
    if (storedData) {
      const data = JSON.parse(storedData);
      this.questionPaperTitle = data.title || '';
      this.questionPaperCourse = data.course || '';
      this.questionPaperSubject = data.subject || '';
    }

    // Initialize with one default section
    this.addSection();
  }

  addSection() {
    const newSection: Section = {
      id: this.sections.length + 1,
      name: `Section ${String.fromCharCode(65 + this.sections.length)}`,
      description: '',
      questions: [],
      collapsed: false // Start expanded
    };
    this.sections.push(newSection);
  }

  deleteSection(sectionId: number) {
    this.sections = this.sections.filter(s => s.id !== sectionId);
    this.calculateTotalMarks();
  }

  addQuestion(sectionId: number, type: 'multiple-choice' | 'descriptive' | 'file-upload') {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      const newQuestion: Question = {
        id: section.questions.length + 1,
        type: type,
        text: '',
        marks: 1,
        options: type === 'multiple-choice' ? ['', '', '', ''] : undefined,
        collapsed: false // Start expanded so user can see it
      };
      section.questions.push(newQuestion);
      section.collapsed = false; // Expand section to show the new question
      this.calculateTotalMarks();
    }
  }

  deleteQuestion(sectionId: number, questionId: number) {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      section.questions = section.questions.filter(q => q.id !== questionId);
      this.calculateTotalMarks();
    }
  }

  calculateTotalMarks() {
    this.totalMarks = this.sections.reduce((total, section) => {
      return total + section.questions.reduce((sectionTotal, question) => {
        return sectionTotal + question.marks;
      }, 0);
    }, 0);
  }

  saveQuestionPaper() {
    console.log('Saving question paper:', {
      title: this.questionPaperTitle,
      course: this.questionPaperCourse,
      sections: this.sections,
      totalMarks: this.totalMarks
    });
    this.router.navigate(['/question-papers']);
  }

  goBack() {
    this.router.navigate(['/question-papers']);
  }
}
