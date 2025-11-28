import { Component } from '@angular/core';

interface TimetableCell {
  subject: string;
  teacher?: string;
  room?: string;
}

interface SchoolTimetableRow {
  className: string;
  periods: TimetableCell[];
}

interface TeacherTimetableRow {
  teacherName: string;
  periods: string[]; // Subject - Class
}

interface ClassTimetableRow {
  day: string;
  periods: TimetableCell[];
}

@Component({
  selector: 'app-view-timetable',
  templateUrl: './view-timetable.component.html',
  styleUrls: ['./view-timetable.component.css']
})
export class ViewTimetableComponent {
  activeTab: 'school' | 'teacher' | 'class' = 'school';

  periods = ['1', '2', '3', '4', '5', '6', '7', '8'];

  // School Wise Data
  classes = ['PPL Batch A', 'PPL Batch B', 'CPL Batch A', 'A&P Morning'];
  selectedClass: string = 'PPL Batch A';

  // Mock Data for School Wise Timetable (now filtered by class)
  // I'll keep the same structure but we will display only the selected class's row or maybe the whole week for that class?
  // The user said "table data changes".
  // If I select "5-A", maybe I should show the weekly timetable for 5-A?
  // Or maybe the user means the "School Wise" view is a list of classes, and clicking one shows that class's row?
  // Let's assume the latter for now, or maybe the weekly view.
  // Actually, "School Wise" usually implies a master view.
  // But if I select a class, it becomes a class-wise view.
  // Let's implement a sidebar and show the weekly timetable for the selected class in the main area.
  // This matches "Class wise" logic.

  // Let's use the classTimetable data for the School Wise tab as well, but driven by the sidebar.

  get currentSchoolTimetable(): ClassTimetableRow[] {
    // Return mock data based on selected class
    // For demo, we'll just return the same mock data but maybe randomized or just static
    return this.batchTimetable;
  }

  // Teacher Wise Data
  teachers = [
    { name: 'Alexander J. Carter', count: 24 },
    { name: 'Sarah M. Lee', count: 22 },
    { name: 'David P. Martinez', count: 20 },
    { name: 'Rebecca K. Ng', count: 18 },
    { name: 'James S. Fletcher', count: 16 }
  ];
  selectedTeacher: string = 'Alexander J. Carter';

  // Mock Data for Teacher Wise Timetable (Weekly view for selected teacher)
  // We'll reuse the ClassTimetableRow structure since it's Day vs Periods
  teacherWeeklyTimetable: ClassTimetableRow[] = [
    { day: 'Monday', periods: [{ subject: 'Flight Training', room: 'PPL Batch A' }, { subject: 'Navigation', room: 'PPL Batch B' }, { subject: '-', room: '-' }, { subject: 'Aerodynamics', room: 'CPL Batch A' }, { subject: 'Meteorology', room: 'A&P Morning' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Tuesday', periods: [{ subject: 'Navigation', room: 'CPL Batch A' }, { subject: 'Avionics', room: 'A&P Morning' }, { subject: 'Flight Training', room: 'PPL Batch A' }, { subject: 'Flight Training', room: 'PPL Batch B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Wednesday', periods: [{ subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Aerodynamics', room: 'PPL Batch A' }, { subject: 'Aerodynamics', room: 'PPL Batch B' }, { subject: 'Flight Training', room: 'CPL Batch A' }, { subject: 'Flight Training', room: 'A&P Morning' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Thursday', periods: [{ subject: 'Flight Training', room: 'PPL Batch B' }, { subject: 'Flight Training', room: 'PPL Batch A' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Avionics', room: 'CPL Batch A' }, { subject: 'Avionics', room: 'A&P Morning' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Friday', periods: [{ subject: 'Flight Training', room: 'CPL Batch A' }, { subject: 'Flight Training', room: 'CPL Batch A' }, { subject: 'Navigation', room: 'A&P Morning' }, { subject: 'Navigation', room: 'PPL Batch B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Saturday', periods: [{ subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Flight Training', room: 'PPL Batch A' }, { subject: 'Flight Training', room: 'PPL Batch B' }, { subject: 'Navigation', room: 'CPL Batch A' }, { subject: 'Avionics', room: 'A&P Morning' }] }
  ];

  get currentTeacherTimetable(): ClassTimetableRow[] {
    return this.teacherWeeklyTimetable;
  }

  // Mock Data for Class Wise Timetable (e.g., for 5-A)
  batchTimetable: ClassTimetableRow[] = [
    { day: 'Monday', periods: [{ subject: 'Flight Training', teacher: 'A. Carter' }, { subject: 'Navigation', teacher: 'S. Lee' }, { subject: 'Aerodynamics', teacher: 'D. Martinez' }, { subject: 'Avionics', teacher: 'R. Ng' }, { subject: 'Systems', teacher: 'J. Fletcher' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }] },
    { day: 'Tuesday', periods: [{ subject: 'Navigation', teacher: 'S. Lee' }, { subject: 'Flight Training', teacher: 'A. Carter' }, { subject: 'Avionics', teacher: 'R. Ng' }, { subject: 'Systems', teacher: 'J. Fletcher' }, { subject: 'Aerodynamics', teacher: 'D. Martinez' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }] },
    { day: 'Wednesday', periods: [{ subject: 'Aerodynamics', teacher: 'D. Martinez' }, { subject: 'Avionics', teacher: 'R. Ng' }, { subject: 'Flight Training', teacher: 'A. Carter' }, { subject: 'Navigation', teacher: 'S. Lee' }, { subject: 'Systems', teacher: 'J. Fletcher' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }] },
    { day: 'Thursday', periods: [{ subject: 'Flight Training', teacher: 'A. Carter' }, { subject: 'Systems', teacher: 'J. Fletcher' }, { subject: 'Avionics', teacher: 'R. Ng' }, { subject: 'Aerodynamics', teacher: 'D. Martinez' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }] },
    { day: 'Friday', periods: [{ subject: 'Flight Training', teacher: 'A. Carter' }, { subject: 'Navigation', teacher: 'S. Lee' }, { subject: 'Aerodynamics', teacher: 'D. Martinez' }, { subject: 'Avionics', teacher: 'R. Ng' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }] },
    { day: 'Saturday', periods: [{ subject: 'Flight Training', teacher: 'A. Carter' }, { subject: 'Simulation', teacher: 'J. Fletcher' }, { subject: 'Navigation', teacher: 'S. Lee' }, { subject: 'Maintenance', teacher: 'D. Martinez' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }, { subject: '-', teacher: '-' }] }
  ];

  setActiveTab(tab: 'school' | 'teacher' | 'class') {
    this.activeTab = tab;
  }

  selectClass(className: string) {
    this.selectedClass = className;
  }

  selectTeacher(teacherName: string) {
    this.selectedTeacher = teacherName;
  }
}
