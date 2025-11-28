import { Component, OnInit } from '@angular/core';

interface KPI {
  label: string;
  value: number | string;
  trend?: 'up' | 'down' | 'steady';
}

interface UpcomingSession {
  id: number;
  title: string;
  date: string;
  time: string;
  batch: string;
  instructor: string;
  status: 'Queued' | 'Configuring' | 'Completed' | 'Failed';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  kpis: KPI[] = [];
  upcoming: UpcomingSession[] = [];

  notifications: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Sample aviation-themed KPI values
    this.kpis = [
      { label: 'Trainees Enrolled', value: 128 },
      { label: 'Active Flights', value: 4 },
      { label: 'Pending Certificates', value: 7 },
      { label: 'Completed Trainings', value: 93 }
    ];

    this.upcoming = [
      { id: 1, title: 'PPL Dual Flight (Route 1)', date: '2025-12-01', time: '08:30', batch: 'PPL Batch A', instructor: 'A. Carter', status: 'Queued' },
      { id: 2, title: 'Avionics Lab', date: '2025-12-01', time: '10:00', batch: 'Avionics', instructor: 'R. Ng', status: 'Configuring' },
      { id: 3, title: 'CPL Navigation Exam', date: '2025-12-02', time: '11:30', batch: 'CPL Batch B', instructor: 'S. Lee', status: 'Queued' }
    ];

    this.notifications = [
      'Weather advisory for 2025-12-01: Low visibility in the morning.',
      'Sim lab maintenance on 2025-12-03 (afternoon).',
      'Certificate batch #6001 ready for approval.'
    ];
  }
}
