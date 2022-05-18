import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  private urlLogin :string='https://coffee-cat.herokuapp.com/login';
  private urlRegister: string = 'https://coffee-cat.herokuapp.com/register';
  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post(this.urlLogin,user);
  }

  register(user: any): Observable<any> {
    
    return this.http.post(this.urlRegister, user);
    
  }

  setToken(token: string){
    this.cookies.set("token", token);
  }

  getToken(){
    return this.cookies.get("token");
  }
}
