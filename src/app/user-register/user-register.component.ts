import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { empty } from 'rxjs';
import { tvservice } from '../tv.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userform: any = {
    password: '',
    email: '',
  }
  constructor(private router: Router,private tv: tvservice) { }

  ngOnInit(): void {
    this.userform({
      email: ['',Validators.email]
    })
  }
  register(){
    if(this.userform.password.length < 6){
      alert('password need more than six')
    }else if( this.userform.email.length == 0){
      alert('you need to input!')
    }else {
      const emailFormControl = new FormControl(this.userform.email, [Validators.email]);
      if (emailFormControl.hasError('email')) {
        alert('Please input a correct email');
    }else {
    this.tv.userRegister(this.userform).subscribe({
      next:(res)=>{
        console.log(res)
        alert('register success')
        
      }
    })
}
    }
  }
}
