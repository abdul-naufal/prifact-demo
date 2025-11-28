import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  pageTitle: string = 'DASHBOARD';
  sectionTitle: string = 'OPS';

  private routeTitles: { [key: string]: string } = {
    '/dashboard': 'COCKPIT',
    '/generate-timetable': 'COURSE TIMETABLE',
    '/manage-syllabus': 'TRAINING SYLLABI',
    '/question-papers': 'EXAM PAPERS',
    '/digital-certificates': 'CERTIFICATES',
    '/question-papers/create': 'CREATE EXAM PAPER',
    '/question-papers/design': 'DESIGN EXAM PAPER'
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });

    // Initial update
    this.updateTitle();
  }

  private updateTitle() {
    const currentUrl = this.router.url.split('?')[0]; // Ignore query params

    // Handle dynamic routes (e.g., /manage-syllabus/1)
    if (currentUrl.startsWith('/manage-syllabus/')) {
      this.pageTitle = 'SYLLABUS DETAILS';
    } else if (this.routeTitles[currentUrl]) {
      this.pageTitle = this.routeTitles[currentUrl];
    } else {
      this.pageTitle = 'DASHBOARD'; // Default
    }
  }
}
