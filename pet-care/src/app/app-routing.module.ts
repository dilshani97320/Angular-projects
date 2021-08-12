import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatsComponent } from './cats/cats.component';
import { ContactComponent } from './contact/contact.component';
import { DogsComponent } from './dogs/dogs.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'pets',component:PetsComponent},
 {path:'types',component:TypesComponent},
 {path:'dogs',component:DogsComponent},
 {path:'cats',component:CatsComponent},
 {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
