import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AlunosService } from './alunos.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import { AlunosComponent } from './components/alunos/alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()

  ],
  providers: [HttpClientModule, AlunosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
