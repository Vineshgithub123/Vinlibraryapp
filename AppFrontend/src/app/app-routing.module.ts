import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {SignUpComponent}  from './sign-up/sign-up.component'
import{BooksComponent} from './books/books.component';
import { NewbookComponent } from './newbook/newbook.component';
import{UpdatebookComponent} from './updatebook/updatebook.component'
import { HomeComponent } from './home/home.component';

import { LoggedinheaderComponent } from './loggedinheader/loggedinheader.component';
const routes: Routes = [{path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignUpComponent},
{path:"Books",component:BooksComponent},
{path:"newbook",
component:NewbookComponent},
{path:"update",component:UpdatebookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
