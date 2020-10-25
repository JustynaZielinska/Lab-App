import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestChoicePageComponent } from './test-form-page/test-choice-page/test-choice-page.component';
import { GenderChoicePageComponent} from './test-form-page/gender-choice-page/gender-choice-page.component';

const routes:Routes = [
    {path: '', redirectTo:'/home-page', pathMatch:'full'},
    {path: 'home-page', component: HomePageComponent},
    {path: 'test-choice-page', component: TestChoicePageComponent},
    {path: 'gender-choice-page', component: GenderChoicePageComponent},
    {path: '**', component: PageNotFoundComponent },
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

