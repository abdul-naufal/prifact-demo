import { Component, OnInit } from '@angular/core';
import { SubjectService, Subject, OptionalGroup } from '../../../../services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  groups: OptionalGroup[] = [];
  subjects: Subject[] = [];

  // Group Form State
  isCreatingGroup = false;
  isEditingGroup = false;
  newGroup: OptionalGroup = { id: 0, displayName: '', description: '', code: '' };

  // Subject Form State
  isCreatingSubject = false;
  isEditingSubject = false;
  newSubject: Subject = { id: 0, displayName: '', description: '', code: '' };

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.subjectService.getGroups().subscribe(data => this.groups = data);
    this.subjectService.getSubjects().subscribe(data => this.subjects = data);
  }

  // --- Group Operations ---

  onCreateGroup() {
    this.isCreatingGroup = true;
    this.isEditingGroup = false;
    this.newGroup = { id: 0, displayName: '', description: '', code: '' };
  }

  onEditGroup(group: OptionalGroup) {
    this.isCreatingGroup = true;
    this.isEditingGroup = true;
    this.newGroup = { ...group };
  }

  onDeleteGroup(group: OptionalGroup) {
    if (confirm(`Delete group ${group.displayName}? This will unlink any associated subjects.`)) {
      this.subjectService.deleteGroup(group.id).subscribe(() => this.loadData());
    }
  }

  onSaveGroup() {
    if (this.newGroup.displayName && this.newGroup.code) {
      if (this.isEditingGroup) {
        this.subjectService.updateGroup(this.newGroup).subscribe(() => {
          this.loadData();
          this.resetGroupForm();
        });
      } else {
        const { id, ...groupData } = this.newGroup;
        this.subjectService.createGroup(groupData as OptionalGroup).subscribe(() => {
          this.loadData();
          this.resetGroupForm();
        });
      }
    }
  }

  onCancelGroup() {
    this.resetGroupForm();
  }

  private resetGroupForm() {
    this.isCreatingGroup = false;
    this.isEditingGroup = false;
    this.newGroup = { id: 0, displayName: '', description: '', code: '' };
  }

  // --- Subject Operations ---

  onCreateSubject() {
    this.isCreatingSubject = true;
    this.isEditingSubject = false;
    this.newSubject = { id: 0, displayName: '', description: '', code: '' };
  }

  onEditSubject(subject: Subject) {
    this.isCreatingSubject = true;
    this.isEditingSubject = true;
    this.newSubject = { ...subject };
  }

  onDeleteSubject(subject: Subject) {
    if (confirm(`Delete subject ${subject.displayName}?`)) {
      this.subjectService.deleteSubject(subject.id).subscribe(() => this.loadData());
    }
  }

  onSaveSubject() {
    if (this.newSubject.displayName && this.newSubject.code) {
      if (this.isEditingSubject) {
        this.subjectService.updateSubject(this.newSubject).subscribe(() => {
          this.loadData();
          this.resetSubjectForm();
        });
      } else {
        const { id, ...subjectData } = this.newSubject;
        this.subjectService.createSubject(subjectData as Subject).subscribe(() => {
          this.loadData();
          this.resetSubjectForm();
        });
      }
    }
  }

  onCancelSubject() {
    this.resetSubjectForm();
  }

  private resetSubjectForm() {
    this.isCreatingSubject = false;
    this.isEditingSubject = false;
    this.newSubject = { id: 0, displayName: '', description: '', code: '' };
  }

  // --- Relationship Operations ---

  onSubjectGroupChange(subject: Subject) {
    this.subjectService.updateSubject(subject).subscribe(() => this.loadData());
  }
}
