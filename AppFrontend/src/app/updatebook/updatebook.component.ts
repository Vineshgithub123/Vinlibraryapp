import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{BooksService} from 'src/books.service'
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  image1:string="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581__340.jpg"

title:string="Update Book Details"
  bookItem={
    Bookcode:0,
    Imageurl:'',
    Authorname:'',
    Genre:'',
    Bookname:''
  }
constructor(private router:Router,private BookService:BooksService ) { }
  ngOnInit(): void {

  
  let Bookname = localStorage.getItem("editbookcode");
  console.log(Bookname,'BOoknam');
  this.BookService.getbook(Bookname).subscribe((data)=>{
    this.bookItem=JSON.parse(JSON.stringify(data))
  })
  }
  updatebook(){
    this.BookService.updatebook(this.bookItem);   
    alert("Success");
    this.router.navigate(['Books']);
  }
}
