import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { HeroesComponent } from './_components/heroes/heroes.component';
import { ItemsComponent } from './_components/items/items.component';
import { LoginComponent } from './_components/login/login.component';
import { MyheroesComponent } from './_components/myheroes/myheroes.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'myheroes', component: MyheroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
