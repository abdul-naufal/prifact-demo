import { Component } from '@angular/core';

interface ScheduleCell {
  subject: string;
  instructor?: string;
  room?: string;
}

interface SchoolScheduleRow {
  className: string;
  periods: ScheduleCell[];
}

interface InstructorScheduleRow {
  instructorName: string;
  periods: string[]; // Subject - Class
}

interface ClassScheduleRow {
  day: string;
  periods: ScheduleCell[];
}

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent {
  activeTab: 'school' | 'instructor' | 'class' = 'school';

  periods = ['1', '2', '3', '4', '5', '6', '7', '8'];

  // School Wise Data
  classes = ['PPL Batch A', 'PPL Batch B', 'CPL Batch A', 'A&P Morning'];
  selectedClass: string = 'PPL Batch A';

  // Mock Data for School Wise Schedule (now filtered by class)
  // I'll keep the same structure but we will display only the selected class's row or maybe the whole week for that class?
  // The user said "table data changes".
  // If I select "5-A", maybe I should show the weekly Schedule for 5-A?
  // Or maybe the user means the "School Wise" view is a list of classes, and clicking one shows that class's row?
  // Let's assume the latter for now, or maybe the weekly view.
  // Actually, "School Wise" usually implies a master view.
  // But if I select a class, it becomes a class-wise view.
  // Let's implement a sidebar and show the weekly Schedule for the selected class in the main area.
  // This matches "Class wise" logic.

  // Let's use the classSchedule data for the School Wise tab as well, but driven by the sidebar.

  get currentSchoolSchedule(): ClassScheduleRow[] {
    // Return mock data based on selected class
    // For demo, we'll just return the same mock data but maybe randomized or just static
    return this.batchSchedule;
  }

  // Instructor Wise Data
  instructors = [
    { name: 'Alexander J. Carter', count: 24 },
    { name: 'Sarah M. Lee', count: 22 },
    { name: 'David P. Martinez', count: 20 },
    { name: 'Rebecca K. Ng', count: 18 },
    { name: 'James S. Fletcher', count: 16 }
  ];
  selectedInstructor: string = 'Alexander J. Carter';

  // Mock Data for Instructor Wise Schedule (Weekly view for selected Instructor)
  // We'll reuse the ClassScheduleRow structure since it's Day vs Periods
  instructorWeeklySchedule: ClassScheduleRow[] = [
    { day: 'Monday', periods: [{ subject: 'Flight Training', room: 'PPL Batch A' }, { subject: 'Navigation', room: 'PPL Batch B' }, { subject: '-', room: '-' }, { subject: 'Aerodynamics', room: 'CPL Batch A' }, { subject: 'Meteorology', room: 'A&P Morning' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Tuesday', periods: [{ subject: 'Navigation', room: 'CPL Batch A' }, { subject: 'Avionics', room: 'A&P Morning' }, { subject: 'Flight Training', room: 'PPL Batch A' }, { subject: 'Flight Training', room: 'PPL Batch B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Wednesday', periods: [{ subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Aerodynamics', room: 'PPL Batch A' }, { subject: 'Aerodynamics', room: 'PPL Batch B' }, { subject: 'Flight Training', room: 'CPL Batch A' }, { subject: 'Flight Training', room: 'A&P Morning' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Thursday', periods: [{ subject: 'Flight Training', room: 'PPL Batch B' }, { subject: 'Flight Training', room: 'PPL Batch A' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Avionics', room: 'CPL Batch A' }, { subject: 'Avionics', room: 'A&P Morning' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Friday', periods: [{ subject: 'Flight Training', room: 'CPL Batch A' }, { subject: 'Flight Training', room: 'CPL Batch A' }, { subject: 'Navigation', room: 'A&P Morning' }, { subject: 'Navigation', room: 'PPL Batch B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Saturday', periods: [{ subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Flight Training', room: 'PPL Batch A' }, { subject: 'Flight Training', room: 'PPL Batch B' }, { subject: 'Navigation', room: 'CPL Batch A' }, { subject: 'Avionics', room: 'A&P Morning' }] }
  ];

  get currentInstructorSchedule(): ClassScheduleRow[] {
    return this.instructorWeeklySchedule;
  }

  // Mock Data for Class Wise Schedule (e.g., for 5-A)
  batchSchedule: ClassScheduleRow[] = [
    { day: 'Monday', periods: [{ subject: 'Flight Training', instructor: 'A. Carter' }, { subject: 'Navigation', instructor: 'S. Lee' }, { subject: 'Aerodynamics', instructor: 'D. Martinez' }, { subject: 'Avionics', instructor: 'R. Ng' }, { subject: 'Systems', instructor: 'J. Fletcher' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }] },
    { day: 'Tuesday', periods: [{ subject: 'Navigation', instructor: 'S. Lee' }, { subject: 'Flight Training', instructor: 'A. Carter' }, { subject: 'Avionics', instructor: 'R. Ng' }, { subject: 'Systems', instructor: 'J. Fletcher' }, { subject: 'Aerodynamics', instructor: 'D. Martinez' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }] },
    { day: 'Wednesday', periods: [{ subject: 'Aerodynamics', instructor: 'D. Martinez' }, { subject: 'Avionics', instructor: 'R. Ng' }, { subject: 'Flight Training', instructor: 'A. Carter' }, { subject: 'Navigation', instructor: 'S. Lee' }, { subject: 'Systems', instructor: 'J. Fletcher' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }] },
    { day: 'Thursday', periods: [{ subject: 'Flight Training', instructor: 'A. Carter' }, { subject: 'Systems', instructor: 'J. Fletcher' }, { subject: 'Avionics', instructor: 'R. Ng' }, { subject: 'Aerodynamics', instructor: 'D. Martinez' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }] },
    { day: 'Friday', periods: [{ subject: 'Flight Training', instructor: 'A. Carter' }, { subject: 'Navigation', instructor: 'S. Lee' }, { subject: 'Aerodynamics', instructor: 'D. Martinez' }, { subject: 'Avionics', instructor: 'R. Ng' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }] },
    { day: 'Saturday', periods: [{ subject: 'Flight Training', instructor: 'A. Carter' }, { subject: 'Simulation', instructor: 'J. Fletcher' }, { subject: 'Navigation', instructor: 'S. Lee' }, { subject: 'Maintenance', instructor: 'D. Martinez' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }, { subject: '-', instructor: '-' }] }
  ];

  setActiveTab(tab: 'school' | 'instructor' | 'class') {
    this.activeTab = tab;
  }

  selectClass(className: string) {
    this.selectedClass = className;
  }

  selectInstructor(instructorName: string) {
    this.selectedInstructor = instructorName;
  }
}




