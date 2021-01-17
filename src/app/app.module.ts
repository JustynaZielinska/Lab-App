import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultIconComponent } from './home-page/welcome-animation/welcome-animation.component';
import { TestFormComponent } from './form-page/test-form/test-form.component';
import { FormPageComponent } from './form-page/form-page.component';
import { GenderFormComponent } from './form-page/gender-form/gender-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnteringResultsComponent } from './form-page/entering-results/entering-results.component';
import { ThyroidFormComponent } from './form-page/entering-results/thyroid-form/thyroid-form.component';
import { LipidsFormComponent } from './form-page/entering-results/lipids-form/lipids-form.component';
import { InterpretationComponent } from './interpretation/interpretation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ResultIconComponent,
    FormPageComponent,
    TestFormComponent,
    GenderFormComponent,
    EnteringResultsComponent,
    ThyroidFormComponent,
    LipidsFormComponent,
    InterpretationComponent,
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
