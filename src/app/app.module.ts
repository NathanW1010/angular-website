import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {AccordionModule} from 'primeng/accordion';
import {AnimateModule} from 'primeng/animate';
import { CardModule } from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {PanelModule} from 'primeng/panel';
import {TimelineModule} from 'primeng/timeline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page-sections/home/home.component';
import { ProjectsComponent } from './page-sections/projects/projects.component';
import { ButtonModule } from 'primeng/button';
import { AboutMeComponent } from './page-sections/about-me/about-me.component';

import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './page-sections/contact/contact.component';
import { WorkExperienceComponent } from './page-sections/work-experience/work-experience.component';
import { EducationComponent } from './page-sections/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
    WorkExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    OwlModule,
    BrowserAnimationsModule,
    CarouselModule,
    DividerModule,
    TimelineModule,
    AccordionModule,
    PanelModule,
    AnimateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
