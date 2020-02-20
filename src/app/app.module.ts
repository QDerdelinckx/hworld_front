import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbFlipCardComponent, NbAccordionModule, NbButtonModule, NbIconModule, NbActionsModule, NbDialogModule, NbSelectComponent, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './_components/nav/nav.component';
import { HomeComponent } from './_components/home/home.component';
import { HeroesComponent } from './_components/heroes/heroes.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ItemsComponent } from './_components/items/items.component';
import { StrValPipe } from './_pipes/str-val.pipe';
import { LoginComponent } from './_components/login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyheroesComponent } from './_components/myheroes/myheroes.component';
import { MyCrewComponent } from './_components/my-crew/my-crew.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeroesComponent,
    ItemsComponent,
    StrValPipe,
    LoginComponent,
    MyheroesComponent,
    MyCrewComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    HttpClientModule,
    NbCardModule,
    NbAccordionModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbSelectModule,
    NbSidebarModule,
    ReactiveFormsModule,
    FormsModule,
    NbDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
