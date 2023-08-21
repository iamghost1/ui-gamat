import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AdminComponent } from './layout/admin/admin.component';
import { FooterComponent } from './layout/admin/footer/footer.component';
import { HeaderComponent } from './layout/admin/header/header.component';
import { MenuComponent } from './layout/admin/menu/menu.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthComponent } from './layout/auth/auth.component';
import { ForgetPasswordComponent } from './layout/auth/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AuthComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule
    DashboardModule
  ],
  exports: [AdminComponent, FooterComponent, HeaderComponent, MenuComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],

})
export class AppModule { }
