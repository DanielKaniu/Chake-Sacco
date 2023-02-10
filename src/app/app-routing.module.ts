import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//
//Components.
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContributionComponent } from './contribution/contribution.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//
//Components.
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
//
//The paths the app is to follow.
const routes = [
  { path: 'register', title: 'Chake | Register', component: RegisterComponent },
  { path: 'user', title: 'Chake | View Users', component: UserComponent },
  { path: 'contact', title: 'Chake | Contact Us', component: ContactComponent },
  { path: 'contribution', title: 'Chake | Contributions', component: ContributionComponent },
  { path: 'about', title: 'Chake | About Us', component: AboutComponent },
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
  { path: '**', title: 'Chake | Page not Found', component: PagenotfoundComponent }
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//
export class AppRoutingModule { }