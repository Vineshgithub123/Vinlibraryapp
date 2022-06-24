import { Component, OnInit } from '@angular/core';
import { bookmodel } from './book.model';
import { BooksService } from 'src/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 title : string="booklist";
 Books: bookmodel[]|any;
  BooksService: any;
  constructor(private bookservice:BooksService,private router:Router) { }

  // get data from th function codes starts
  ngOnInit(): void {
    this.bookservice.getbooks().subscribe((data: any)=>{
    this.Books = JSON.parse(JSON.stringify(data))
    console.log(this.Books);
    
    })
    
  }
  // get data from th function codes ends
  updatebook(book:any){
    
    localStorage.setItem("editbookcode", book.toString());
    this.router.navigate(['update']);
  }

  deletebook(book: any){
    this.bookservice.deletebook(book._id)
    .subscribe((data)=>{
      this.Books=this.Books.filter((p: any)=>p !==book)
    })
  }

}
