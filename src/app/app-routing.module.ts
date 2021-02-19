import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InterpretationComponent } from './pages/interpretation/interpretation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ContactSubpageComponent } from './pages/menu-subpages/contact-subpage/contact-subpage.component';
import { AboutProjectComponent } from './pages/menu-subpages/about-project-subpage/about-project.component';
import { AboutTestsComponent } from './pages/menu-subpages/about-tests-subpage/about-tests.component';


const routes: Routes = [
    {path: '', redirectTo: '/home-page', pathMatch: 'full', data: {depth: 0}},
    {path: 'home-page', component: HomePageComponent, data: { depth: 1 }},
    {path: 'test-form-page', component: FormsComponent, data: { depth: 2 }},
    {path: 'interpretation', component: InterpretationComponent, data: { depth: 3}},
    {path: 'about-project', component: AboutProjectComponent},
    {path: 'about-tests', component: AboutTestsComponent},
    {path: 'contact', component: ContactSubpageComponent},
    {path: '**', component: PageNotFoundComponent },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

