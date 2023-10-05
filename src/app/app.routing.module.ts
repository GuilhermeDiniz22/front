import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AlunosComponent } from './components/alunos/alunos.component';

const routes: Routes = [{
    path: 'alunos', component: AlunosComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })

export class AppRoutingModule {}