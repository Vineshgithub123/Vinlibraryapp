import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signupusermodel } from './sign-up/signupusermodel';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
user={
  fullname:'',
  mobile:0,
  email:'',
  password:0

}
  constructor( private http:HttpClient) { }


  newuser(users:signupusermodel){
    console.log(users);
    
    return this.http.post('http://localhost:3000/Signup',{users})
      .subscribe(data=>{
        console.log('data');
        
      })
    }
  }

  // addBook(item: bookmodel){
  //   return this.http.post('http://localhost:3000/insert',
  //   {item}).subscribe(data=>{console.log(data);
  //   })

  // }

