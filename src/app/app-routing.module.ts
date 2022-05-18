import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGatoComponent } from './add-gato/add-gato.component';
import { GatoDetailComponent } from './gato-detail/gato-detail.component';
import { GatosComponent } from './gatos/gatos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'gatos', component: GatosComponent},
  { path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'gatos/detail/:id', component:GatoDetailComponent},
  {path: 'gatos/add', component:AddGatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
