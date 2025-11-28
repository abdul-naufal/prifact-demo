import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TimetableConfig {
  id: number;
  name: string;
  course: string; // e.g., PPL, CPL, Type Rating
  batch: string; // e.g., Morning, Batch A
  status: 'Completed' | 'Configuring' | 'Queued' | 'Failed';
}

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.css']
})
export class TimetableListComponent implements OnInit {
  configurations: TimetableConfig[] = [
    { id: 1, name: 'Private Pilot Timetable', course: 'PPL', batch: 'Batch A', status: 'Failed' },
    { id: 2, name: 'Commercial Pilot Exam Schedule', course: 'CPL', batch: 'Batch B', status: 'Failed' },
    { id: 3, name: 'Instrument Rating Course', course: 'IR', batch: 'Evening', status: 'Failed' },
    { id: 4, name: 'Airframe Maintenance Training', course: 'A&P', batch: 'Morning', status: 'Failed' },
    { id: 5, name: 'Type Rating - Cessna 172', course: 'Type Rating', batch: 'Simulator', status: 'Failed' },
    { id: 6, name: 'Demo Schedule', course: 'PPL', batch: 'Demo', status: 'Configuring' },
    { id: 7, name: 'Next Term', course: 'CPL', batch: 'Batch C', status: 'Queued' },
    { id: 8, name: 'Last Year Archive', course: 'PPL', batch: 'Archived', status: 'Completed' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    // Normalize any outdated statuses to our allowed list
    const allowedStatuses = ['Completed', 'Configuring', 'Queued', 'Failed'];
    this.configurations = this.configurations.map(cfg => ({
      ...cfg,
      status: allowedStatuses.includes(cfg.status) ? cfg.status : 'Failed'
    }));
  }

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
