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
  public publicationn :Publication;
  publications:any;
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
 
 public updateEmployee(id:number , publicationn: Publication) {
  this.service.updatePublication(id,publicationn)
    .subscribe(data => {
      console.log(data);
      this.publicationn = new Publication("","",0);
    }, error => console.log(error));
}






  ngOnInit() {
    if (this.tokenStorage.getUser()) {
      this.isLoggedIn = true }

    let resp=this.service.getPublication();
    resp.subscribe((data)=>this.publications=data);}


  
     public add(){
       let resp=this.service.doAddpublication(this.publication);
       window.location.reload();

       resp.subscribe((data)=>this.publications=data);
   


      }
  }


        
       
    



 

  
  

