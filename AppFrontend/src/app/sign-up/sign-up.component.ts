import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators,NgForm } from '@angular/forms';
import { FormGroup,FormBuilder } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { signupusermodel } from './signupusermodel';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

//  signupform!:FormGroup
  // submitted=false;
  constructor( private formBuilder:FormBuilder, private signupservies:SignupService, private router:Router) { }

  newuser =  {
    fullname: '',
     mobile:0,
     email:'',
     password:0
   }

  ngOnInit(): void {

  }

  signUp(){
this.signupservies.newuser(this.newuser)
console.log(this.newuser);
  alert("User added");
  this.router.navigate(['login'])


  }}

  


