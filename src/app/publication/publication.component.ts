import { Comment } from './../comment';
import { Publication } from './../publication';
import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../_services/publication.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  publication= new Publication("", "", 0) ;
  comment=new Comment("");
  public publicationn :Publication;

  publications:any;
  commentt:any;
  email:string;
  isLoggedIn = false;
  description :''
 showDiv = {
  previous : false,
  current : false,
  next : false
          }
 message:any;
 id: number;


  constructor(private service:PublicationService,private tokenStorage: TokenStorageService) { }


public deltePub(id:number){
 let resp= this.service.deletepub(id);
 resp.subscribe((data)=>this.publications=data);
 window.location.reload();
}
public Addreactpub(id:number){
  let resp= this.service.doAddreact(id);
  resp.subscribe((data)=>this.publications=data);
  window.location.reload();
 }
 
 public updatePublication(id:number , publicationn: Publication) {
  this.service.updatePublication(id,publicationn)
    .subscribe(data => {
      console.log(data);
      this.publicationn = new Publication("","",0);
      window.location.reload();

    }, error => console.log(error));
}
public addcommenttopublication(id:number , comment: Comment) {
  this.comment = new Comment("");
  this.service.addcommentPublication(id,comment)

    .subscribe(data => {
      console.log(data);
      window.location.reload();

    }, error => console.log(error));
}






  ngOnInit() {
    if (this.tokenStorage.getUser()) {
      this.isLoggedIn = true }

    let resp=this.service.getPublication();
    let respp=this.service.getComment();
    respp.subscribe((data)=>this.commentt=data)
    resp.subscribe((data)=>this.publications=data);}


  
     public add(){
       let resp=this.service.doAddpublication(this.publication);
       window.location.reload();

       resp.subscribe((data)=>this.publications=data);
   


      }
  }


        
       
    



 

  
  

