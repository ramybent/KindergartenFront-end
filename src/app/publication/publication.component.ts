import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../_services/publication.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  publications:any;
  email:string;
  isLoggedIn = false;

  
  constructor(private service:PublicationService,private tokenStorage: TokenStorageService) { }


public deltePub(id:number){
 let resp= this.service.deletepub(id);
 resp.subscribe((data)=>this.publications=data);
}

//public findUserByEmailId(){
  //let resp= this.service.getUserByEmail(this.email);
  //resp.subscribe((data)=>this.users=data);
 //}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true }

    let resp=this.service.getPublication();
    resp.subscribe((data)=>this.publications=data);
  }

}
