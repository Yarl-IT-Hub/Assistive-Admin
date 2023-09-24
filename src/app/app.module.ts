import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Admin/login/login.component';
import { ForgetpwComponent } from './Admin/forgetpw/forgetpw.component';
import { ChangepwComponent } from './Admin/changepw/changepw.component';
import { HttpClientModule} from '@angular/common/http'
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './Admin/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpwComponent,
    ChangepwComponent,
    NotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
