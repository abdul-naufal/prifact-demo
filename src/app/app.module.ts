import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http'; // Removed HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { GenerateTimetableComponent } from './pages/generate-timetable/generate-timetable.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TimetableListComponent } from './components/timetable-list/timetable-list.component';
import { ManageConfigurationComponent } from './pages/manage-configuration/manage-configuration.component';
import { SubjectsComponent } from './pages/manage-configuration/tabs/subjects/subjects.component';
import { TeachersComponent } from './pages/manage-configuration/tabs/teachers/teachers.component';
import { ManageSyllabusComponent } from './pages/manage-syllabus/manage-syllabus.component';
import { ManageSyllabusDetailComponent } from './pages/manage-syllabus-detail/manage-syllabus-detail.component';
import { DigitalCertificatesComponent } from './pages/digital-certificates/digital-certificates.component';
import { ViewTimetableComponent } from './pages/view-timetable/view-timetable.component';

import { ClassesComponent } from './pages/manage-configuration/tabs/classes/classes.component';
import { QuestionPapersComponent } from './pages/question-papers/question-papers.component';
import { QuestionPaperCreateComponent } from './pages/question-paper-create/question-paper-create.component';
import { QuestionPaperDesignComponent } from './pages/question-paper-design/question-paper-design.component';
import { DocumentsComponent } from './pages/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    GenerateTimetableComponent,
    TimetableListComponent,
    ManageConfigurationComponent,
    SubjectsComponent,
    TeachersComponent,
    ClassesComponent,
    ManageSyllabusComponent,
    ManageSyllabusDetailComponent,
    DigitalCertificatesComponent,
    ViewTimetableComponent,
    QuestionPapersComponent,
    QuestionPaperCreateComponent,
    QuestionPaperDesignComponent
    ,DashboardComponent, DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // HttpClientModule // Removed HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
