import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
    {path: '', redirectTo: '/home-page', pathMatch: 'full'},
    {path: 'home-page', component: HomePageComponent},
    {path: 'test-form-page', component: FormsComponent},
    {path: 'interpretation', component: InterpretationComponent},
    {path: '**', component: PageNotFoundComponent },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

