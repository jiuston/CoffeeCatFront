import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInputDTO } from '../modelos/userInputDTO';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email?: string;
  password?: string;
  user?: userInputDTO;
  constructor(private router: Router, private userService: UserService) {  }
  ngOnInit(): void {
   
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => this.setData(data));
  }

  setData(user: any){
    this.user=user;
    this.userService.setToken(user.token);
    if (this.userService.getToken()) {
      this.router.navigate(['/gatos']);
    }
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
}