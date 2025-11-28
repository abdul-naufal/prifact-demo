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
  classes = ['5-A', '5-B', '6-A', '6-B', '7-A'];
  selectedClass: string = '5-A';

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
    return this.classTimetable;
  }

  // Teacher Wise Data
  teachers = [
    { name: 'John Doe (JD)', count: 24 },
    { name: 'Jane Smith (JS)', count: 22 },
    { name: 'Mike King (MK)', count: 20 },
    { name: 'Alice Lee (AL)', count: 18 },
    { name: 'Robert Tate (RT)', count: 16 }
  ];
  selectedTeacher: string = 'John Doe (JD)';

  // Mock Data for Teacher Wise Timetable (Weekly view for selected teacher)
  // We'll reuse the ClassTimetableRow structure since it's Day vs Periods
  teacherWeeklyTimetable: ClassTimetableRow[] = [
    { day: 'Monday', periods: [{ subject: 'Math', room: '5-A' }, { subject: 'Math', room: '5-B' }, { subject: '-', room: '-' }, { subject: 'Math', room: '6-A' }, { subject: 'Math', room: '6-B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Tuesday', periods: [{ subject: 'Math', room: '6-A' }, { subject: 'Math', room: '6-B' }, { subject: 'Math', room: '5-A' }, { subject: 'Math', room: '5-B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Wednesday', periods: [{ subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Math', room: '7-A' }, { subject: 'Math', room: '7-B' }, { subject: 'Math', room: '5-A' }, { subject: 'Math', room: '5-B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Thursday', periods: [{ subject: 'Math', room: '5-B' }, { subject: 'Math', room: '5-A' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Math', room: '7-A' }, { subject: 'Math', room: '7-B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Friday', periods: [{ subject: 'Math', room: '7-A' }, { subject: 'Math', room: '7-B' }, { subject: 'Math', room: '6-A' }, { subject: 'Math', room: '6-B' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }] },
    { day: 'Saturday', periods: [{ subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: '-', room: '-' }, { subject: 'Math', room: '5-A' }, { subject: 'Math', room: '5-B' }, { subject: 'Math', room: '6-A' }, { subject: 'Math', room: '6-B' }] }
  ];

  get currentTeacherTimetable(): ClassTimetableRow[] {
    return this.teacherWeeklyTimetable;
  }

  // Mock Data for Class Wise Timetable (e.g., for 5-A)
  classTimetable: ClassTimetableRow[] = [
    { day: 'Monday', periods: [{ subject: 'Math', teacher: 'JD' }, { subject: 'Eng', teacher: 'JS' }, { subject: 'Sci', teacher: 'MK' }, { subject: 'Hist', teacher: 'AL' }, { subject: 'Geo', teacher: 'RT' }, { subject: 'Art', teacher: 'CW' }, { subject: 'PE', teacher: 'PT' }, { subject: 'Lib', teacher: 'LB' }] },
    { day: 'Tuesday', periods: [{ subject: 'Eng', teacher: 'JS' }, { subject: 'Math', teacher: 'JD' }, { subject: 'Hist', teacher: 'AL' }, { subject: 'Sci', teacher: 'MK' }, { subject: 'Art', teacher: 'CW' }, { subject: 'Geo', teacher: 'RT' }, { subject: 'Lib', teacher: 'LB' }, { subject: 'PE', teacher: 'PT' }] },
    { day: 'Wednesday', periods: [{ subject: 'Sci', teacher: 'MK' }, { subject: 'Hist', teacher: 'AL' }, { subject: 'Math', teacher: 'JD' }, { subject: 'Eng', teacher: 'JS' }, { subject: 'PE', teacher: 'PT' }, { subject: 'Lib', teacher: 'LB' }, { subject: 'Art', teacher: 'CW' }, { subject: 'Geo', teacher: 'RT' }] },
    { day: 'Thursday', periods: [{ subject: 'Hist', teacher: 'AL' }, { subject: 'Sci', teacher: 'MK' }, { subject: 'Eng', teacher: 'JS' }, { subject: 'Math', teacher: 'JD' }, { subject: 'Lib', teacher: 'LB' }, { subject: 'PE', teacher: 'PT' }, { subject: 'Geo', teacher: 'RT' }, { subject: 'Art', teacher: 'CW' }] },
    { day: 'Friday', periods: [{ subject: 'Math', teacher: 'JD' }, { subject: 'Eng', teacher: 'JS' }, { subject: 'Sci', teacher: 'MK' }, { subject: 'Hist', teacher: 'AL' }, { subject: 'Geo', teacher: 'RT' }, { subject: 'Art', teacher: 'CW' }, { subject: 'PE', teacher: 'PT' }, { subject: 'Lib', teacher: 'LB' }] },
    { day: 'Saturday', periods: [{ subject: 'Eng', teacher: 'JS' }, { subject: 'Math', teacher: 'JD' }, { subject: 'Hist', teacher: 'AL' }, { subject: 'Sci', teacher: 'MK' }, { subject: 'Art', teacher: 'CW' }, { subject: 'Geo', teacher: 'RT' }, { subject: 'Lib', teacher: 'LB' }, { subject: 'PE', teacher: 'PT' }] }
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
