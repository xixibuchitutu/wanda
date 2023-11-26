import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { tvservice } from '../tv.service';
import { XCorner } from '@ng-nest/ui/core';
import { XNotificationService } from '@ng-nest/ui/notification';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
   userform: any = {
    password: '',
    email: '',
  }
  userpassword:any
  constructor(private router: Router,private tv: tvservice,private notification: XNotificationService) { }

  ngOnInit(): void {
    this.userform({
      email: ['',Validators.email]
    })
  }
  login(){
    this.tv.userlogin(this.userform).subscribe({
      next:(res)=>{
        if(this.userform.password.length < 6){
          alert('password need more than six')
        }else {
          const emailFormControl = new FormControl(this.userform.email, [Validators.email]);
          if (emailFormControl.hasError('email')) {
            alert('Please input a correct email');
        }else{
        console.log(res)
        console.log(res.value[0].password)
        if(res.value[0].password == this.userform.password){
          alert('login success')
          this.router.navigate(['/home'],{ queryParams: { user: res.value[0].email }});
        }else{
          alert('not have this user or wrong password')
        }
     /*   console.log(res[1]) 
        if(res[1]== 404){
          alert('not have this user or wrong password')
        }else{
        console.log(res)
        alert('login success')
        this.router.navigate(['/home'],{ queryParams: { user: res[0].data.email }});
        
        }
        */
      }
    }
  }}
    )
}

}
