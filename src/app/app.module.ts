import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatosComponent } from './gatos/gatos.component';
import { GatoDetailComponent } from './gato-detail/gato-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { AddGatoComponent } from './add-gato/add-gato.component';

@NgModule({
  declarations: [
    AppComponent,
    GatosComponent,
    GatoDetailComponent,
    LoginComponent,
    RegisterComponent,
    AddGatoComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
