import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface TimetableConfig {
  id: number;
  name: string;
  class: string;
  division: string;
  status: 'Active' | 'Inactive' | 'Configuring' | 'Queued' | 'Completed';
}

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.css']
})
export class TimetableListComponent {
  configurations: TimetableConfig[] = [
    { id: 1, name: 'Standard Timetable', class: 'X', division: 'A', status: 'Active' },
    { id: 2, name: 'Exam Schedule', class: 'X', division: 'B', status: 'Inactive' },
    { id: 3, name: 'Summer Camp', class: 'IX', division: 'All', status: 'Active' },
    { id: 4, name: 'Winter Session', class: 'VIII', division: 'C', status: 'Active' },
    { id: 5, name: 'Special Class', class: 'XII', division: 'Science', status: 'Inactive' },
    { id: 6, name: 'DemoTT', class: 'X', division: 'A', status: 'Configuring' },
    { id: 7, name: 'Next Term', class: 'IX', division: 'B', status: 'Queued' },
    { id: 8, name: 'Last Year', class: 'XII', division: 'A', status: 'Completed' }
  ];

  constructor(private router: Router) { }

  onManage(config: TimetableConfig) {
    if (config.status === 'Configuring') {
      this.router.navigate(['/manage-configuration']);
    }
  }

  onView(config: TimetableConfig) {
    if (config.status === 'Completed') {
      this.router.navigate(['/view-timetable']);
    }
  }
}
