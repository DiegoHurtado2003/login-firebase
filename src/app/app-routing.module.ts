import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},//Si no pones nada te manda a login
  { path: "login", component: LoginComponent},
  { path: "recoverPassword", component: RecoverPasswordComponent},
  { path: "dashboard", component: DashboardComponent},
  { path: "**", redirectTo: "login", pathMatch: "full"}//Si pones cualquier cosa(Que no esté arriba) te manda a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
