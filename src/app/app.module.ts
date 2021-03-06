import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InterpretationGuard } from './core/services/guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navbar/navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResultIconComponent } from './pages/home-page/welcome-animation/welcome-animation.component';
import { TestFormComponent } from './pages/forms/test-form/test-form.component';
import { FormsComponent } from './pages/forms/forms.component';
import { GenderFormComponent } from './pages/forms/gender-form/gender-form.component';
import { ResultsFormsComponent } from './pages/forms/results-forms/results-forms.component';
import { ThyroidFormComponent } from './pages/forms/results-forms/thyroid-form/thyroid-form.component';
import { LipidsFormComponent } from './pages/forms/results-forms/lipids-form/lipids-form.component';
import { InterpretationComponent } from './pages/interpretation/interpretation.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactSubpageComponent } from './pages/menu-subpages/contact-subpage/contact-subpage.component';
import { AboutProjectComponent } from './pages/menu-subpages/about-project-subpage/about-project.component';
import { AboutTestsComponent } from './pages/menu-subpages/about-tests-subpage/about-tests.component';
import { TestCardComponent } from './components/test-card/test-card.component';

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
    MenuComponent,
    ContactSubpageComponent,
    AboutProjectComponent,
    AboutTestsComponent,
    TestCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [InterpretationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
