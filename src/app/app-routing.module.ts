import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { GenerateTimetableComponent } from './pages/generate-timetable/generate-timetable.component';
import { ManageConfigurationComponent } from './pages/manage-configuration/manage-configuration.component';
import { SubjectsComponent } from './pages/manage-configuration/tabs/subjects/subjects.component';
import { TeachersComponent } from './pages/manage-configuration/tabs/teachers/teachers.component';
import { ManageSyllabusComponent } from './pages/manage-syllabus/manage-syllabus.component';
import { ManageSyllabusDetailComponent } from './pages/manage-syllabus-detail/manage-syllabus-detail.component';
import { DigitalCertificatesComponent } from './pages/digital-certificates/digital-certificates.component';
import { ViewTimetableComponent } from './pages/view-timetable/view-timetable.component';
import { ClassesComponent } from './pages/manage-configuration/tabs/classes/classes.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'generate-timetable', pathMatch: 'full' },
      { path: 'generate-timetable', component: GenerateTimetableComponent },
      { path: 'manage-syllabus', component: ManageSyllabusComponent },
      { path: 'manage-syllabus/:id', component: ManageSyllabusDetailComponent },
      {
        path: 'manage-configuration', // Modified path
        component: ManageConfigurationComponent,
        children: [
          { path: '', redirectTo: 'subjects', pathMatch: 'full' },
          { path: 'subjects', component: SubjectsComponent },
          { path: 'teachers', component: TeachersComponent },
          { path: 'classes', component: ClassesComponent }
        ]
      },
      { path: 'digital-certificates', component: DigitalCertificatesComponent },
      { path: 'view-timetable', component: ViewTimetableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
