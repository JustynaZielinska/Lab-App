import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultIconComponent } from './home-page/result-icon/result-icon.component';
import { TestChoicePageComponent } from './test-form-page/test-choice-page/test-choice-page.component';
import { TestFormPageComponent } from './test-form-page/test-form-page.component';
import { GenderChoicePageComponent } from './test-form-page/gender-choice-page/gender-choice-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnteringResultsPageComponent } from './test-form-page/entering-results-page/entering-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ResultIconComponent,
    TestChoicePageComponent,
    TestFormPageComponent,
    GenderChoicePageComponent,
    EnteringResultsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
