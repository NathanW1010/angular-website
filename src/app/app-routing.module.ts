import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page-sections/home/home.component';
import { ProjectsComponent } from './page-sections/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
