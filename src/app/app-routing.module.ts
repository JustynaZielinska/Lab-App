import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
    {path: '', redirectTo: '/home-page', pathMatch: 'full', data: {depth: 0}},
    {path: 'home-page', component: HomePageComponent, data: { depth: 1 }},
    {path: 'test-form-page', component: FormsComponent, data: { depth: 2 }},
    {path: 'interpretation', component: InterpretationComponent, data: { depth: 3}},
    {path: '**', component: PageNotFoundComponent },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

