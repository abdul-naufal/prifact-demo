import { Component, OnInit } from '@angular/core';
import { TeacherService, Teacher } from '../../../../services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [];

  isCreating = false;
  isEditing = false;
  newTeacher: Teacher = { id: 0, firstName: '', middleName: '', lastName: '', code: '' };

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  onEdit(teacher: Teacher) {
    this.isCreating = true;
    this.isEditing = true;
    this.newTeacher = { ...teacher };
  }

  onDelete(teacher: Teacher) {
    if (confirm(`Are you sure you want to delete ${teacher.firstName} ${teacher.lastName}?`)) {
      this.teacherService.deleteTeacher(teacher.id).subscribe(() => {
        this.loadTeachers();
      });
    }
  }

  onCreate() {
    this.isCreating = true;
    this.isEditing = false;
    this.newTeacher = { id: 0, firstName: '', middleName: '', lastName: '', code: '' };
  }

  onSave() {
    if (this.newTeacher.firstName && this.newTeacher.lastName) {
      if (this.isEditing) {
        this.teacherService.updateTeacher(this.newTeacher).subscribe(() => {
          this.loadTeachers();
          this.resetForm();
        });
      } else {
        const { id, ...teacherData } = this.newTeacher; // Remove ID for creation
        this.teacherService.createTeacher(teacherData as Teacher).subscribe(() => {
          this.loadTeachers();
          this.resetForm();
        });
      }
    }
  }

  onCancel() {
    this.resetForm();
  }

  private resetForm() {
    this.isCreating = false;
    this.isEditing = false;
    this.newTeacher = { id: 0, firstName: '', middleName: '', lastName: '', code: '' };
  }
}
