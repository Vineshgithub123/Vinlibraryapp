import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/books.service';
import { bookmodel } from '../books/book.model';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
title:string="Add New Book";
// newbookform!:FormGroup;
// newbook:FormGroup
  constructor( private bookservice:BooksService, public router:Router,private frombuilder:FormBuilder) {

   }
bookItem=new bookmodel(0, '', '', '','')


  ngOnInit(): void {

  }

  NewBook(){
    this.bookservice.addBook(this.bookItem);
    alert('New Book Added');
    this.router.navigate(['/'])
  }

}
