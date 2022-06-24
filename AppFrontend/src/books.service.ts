import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { bookmodel } from './app/books/book.model';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  Item={
    Bookcode:0,
    Imageurl:'',
    Authorname:'',
    Genre:'',
    Bookname:''
  }
  constructor(private http:HttpClient) { }
  getbooks(){
    return this.http.get('http://localhost:3000/Books')

  }
  getbook(id:any){
    console.log(id,'iddd');
    
    return this.http.get('http://localhost:3000/'+id)

  }


  addBook(item: bookmodel){
    return this.http.post('http://localhost:3000/insert',
    {item}).subscribe(data=>{console.log(data);
    })

  }

  updatebook(Books:any){
    console.log('client update');
    return this.http.put('http://localhost:3000/update',Books)
    .subscribe(data=>{
      console.log(data);

    })
    
  }
  deletebook(id:any){
    return this.http.delete("http://localhost:3000/remove/"+id)
  }
}
