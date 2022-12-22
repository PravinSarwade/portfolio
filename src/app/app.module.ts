import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    SidebarComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
    ServicesSectionComponent,
    ProjectSectionComponent,
    WorkSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
