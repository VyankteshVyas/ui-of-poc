import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import AuthData from 'src/Models/AuthData';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  authRes:number;
  authCred:AuthData=new AuthData();
  loginForm = this.formBuilder.group({
    role: '',
    mobNo: '',
    password: ''
  });

  constructor(private router:Router,private formBuilder: FormBuilder,private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Process checkout data here
    
    this.authCred.Mobile=this.loginForm.value.mobNo;
    this.authCred.Password=this.loginForm.value.password;
    this.authCred.Role=this.loginForm.value.role;
    console.warn('authdata value is', this.authCred);
    this.sharedService.checkAuth(this.authCred).subscribe(userid=>{
      if(userid!=-1){
        console.log("succ uses id is ",userid);
        this.router.navigate([this.loginForm.value.role,userid])
      }else{
        console.log("login unsuccessful");
      }
    })
    // this.router.navigate([this.loginForm.value.role,this])
    //  this.loginForm.reset();
  }

}
