import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navbar/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultIconComponent } from './home-page/welcome-animation/welcome-animation.component';
import { TestFormComponent } from './forms/test-form/test-form.component';
import { FormsComponent } from './forms/forms.component';
import { GenderFormComponent } from './forms/gender-form/gender-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsFormsComponent } from './forms/results-forms/results-forms.component';
import { ThyroidFormComponent } from './forms/results-forms/thyroid-form/thyroid-form.component';
import { LipidsFormComponent } from './forms/results-forms/lipids-form/lipids-form.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { SidebarComponent } from './menu/menu.component';
import { ContactSubpageComponent } from './menu-subpages/contact-subpage/contact-subpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ResultIconComponent,
    FormsComponent,
    TestFormComponent,
    GenderFormComponent,
    ResultsFormsComponent,
    ThyroidFormComponent,
    LipidsFormComponent,
    InterpretationComponent,
    SidebarComponent,
    ContactSubpageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
