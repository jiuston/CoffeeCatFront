import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;

  constructor(public userService: UserService) {}
  ngOnInit(): void {
   
  }

  register() {
    if(this.password === this.confirmPassword){
      const user = {email: this.email, nombre: this.nombre, password: this.password};
      this.userService.register(user).subscribe(data => {
        console.log(data);
      });
    }else{
      alert("Passwords don't match");
    }
  }
}
