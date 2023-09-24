import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './Components/admin-dash/admin-dash.component';
import { AnswerComponent } from './Components/answer/answer.component';
import { GradeComponent } from './Components/Grade/grade/grade.component';
import { LevelComponent } from './Components/level/level.component';
import { QuestionComponent } from './Components/question/question.component';
import { QuestiontypeComponent } from './Components/questiontype/questiontype.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { SyllabusComponent } from './Components/syllabus/syllabus.component';

const routes: Routes = [

  {
    path: '', component: AdminDashComponent,
    children: [
      { path: 'grade', component: GradeComponent},
      { path: 'level', component: LevelComponent},
      { path: 'question', component: QuestionComponent},
      { path: 'answer', component: AnswerComponent },
      { path: 'qType', component: QuestiontypeComponent },
      { path: 'subject', component: SubjectsComponent },
      { path: 'syllabus', component: SyllabusComponent },
      { path: '', redirectTo: '/admin/grade', pathMatch: 'full'},


    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
