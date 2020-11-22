import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestFormPageComponent } from './test-form-page/test-form-page.component';
import { EnteringResultsPageComponent } from './test-form-page/entering-results-page/entering-results-page.component';

const routes:Routes = [
    {path: '', redirectTo:'/home-page', pathMatch:'full'},
    {path: 'home-page', component: EnteringResultsPageComponent},
    {path: 'test-form-page', component: TestFormPageComponent},
    {path: '**', component: PageNotFoundComponent },
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

