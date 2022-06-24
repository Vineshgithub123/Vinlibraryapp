import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginform!:FormGroup

 

  constructor(private formBuilder :FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginform =this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    
    this.http.post<any>("http://localhost:3000/login",this.loginform.value)
    .subscribe(res=>{
       console.log('submitted');
       console.log(res);
       this.router.navigate(['Books'])
       
      },
      err=>{
        alert('No User Found!!Please Signup!')
      }
      );
    }}
  
