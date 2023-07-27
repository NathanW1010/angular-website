import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {PanelModule} from 'primeng/panel';
import {TimelineModule} from 'primeng/timeline';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './page-sections/home/home.component';
import {ProjectsComponent} from './page-sections/projects/projects.component';
import {ButtonModule} from 'primeng/button';
import {AboutMeComponent} from './page-sections/about-me/about-me.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactComponent} from './page-sections/contact/contact.component';
import {WorkExperienceComponent} from './page-sections/work-experience/work-experience.component';
import {EducationComponent} from './page-sections/education/education.component';

import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgOptimizedImage} from '@angular/common'

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
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    DividerModule,
    TimelineModule,
    PanelModule,
    CarouselModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
