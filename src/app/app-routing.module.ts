import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/auth/login/login.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { ForgetPasswordComponent } from './layout/auth/forget-password/forget-password.component';

const routes: Routes = [
  { path: "", redirectTo:"admin/dashboard/principal", pathMatch:"full"},
  { 
    path: "auth", 
    component: AuthComponent,
    children: [
      {
        path: "login", component: LoginComponent
      },
      {
        path: "forget/password", component: ForgetPasswordComponent
      }
    ]
  },
  { 
    path: "admin", 
    component: AdminComponent,
    children: [{
      path:"dashboard",
      loadChildren:() => import('./pages/dashboard/dashboard.module').then(module => module.DashboardModule)
    },
    {
      path:"adhesion",
      loadChildren:() => import('./pages/adhesion/adhesion.module').then(module => module.AdhesionModule)
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
