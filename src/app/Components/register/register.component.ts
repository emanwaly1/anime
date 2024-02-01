import { Component, NgModule } from '@angular/core';
import { ApiService } from '../../Services/Api.service';
import { IRegisterUser } from '../../DataTypes/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
@NgModule({
  imports: [
    FormsModule,

  ]
})
export class RegisterComponent {
user:IRegisterUser

constructor(private AuthApiServ:ApiService,private router:Router){
  this.user =  {
    name: '',
    password: "",
    phoneNumber:"",
    email:""
  }
}

  Send() {

    this.AuthApiServ.Register(this.user).subscribe({
      next:(responce)=>{
        if (responce.success == true) {
          alert(responce.message)
          this.router.navigateByUrl("/login")
        } else {
          alert(responce.message)
        }
      }
    })
  }
}
