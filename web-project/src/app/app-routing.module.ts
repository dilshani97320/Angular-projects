import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinNowComponent } from './join-now/join-now.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'course',component:CourseComponent},
{path:'join-now',component:JoinNowComponent},
{path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
