import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
// import { LoginComponent } from './login/login.component';
import { Web3Component } from './web3/web3.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'user/:name',
    component: UserComponent
  }, {
  //   path: 'login',
  //   component: LoginComponent
  // }, {
    path: 'web3',
    component: Web3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
