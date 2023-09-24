import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './Components/admin-dash/admin-dash.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { LevelComponent } from './Components/level/level.component';
import { SyllabusComponent } from './Components/syllabus/syllabus.component';
import { GradeComponent } from './Components/Grade/grade/grade.component';
import { QuestionComponent } from './Components/question/question.component';
import { QuestiontypeComponent } from './Components/questiontype/questiontype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AnswerComponent } from './Components/answer/answer.component';


@NgModule({
  declarations: [
    AdminDashComponent,
    SubjectsComponent,
    LevelComponent,
    SyllabusComponent,
    GradeComponent,
    QuestionComponent,
    QuestiontypeComponent,
    SidebarComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,

  ],
})
export class AdminModule { }
