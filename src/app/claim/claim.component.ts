import { Claim } from './../claim';
import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../_services/publication.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  isLoggedIn = false;
  claims:any;
  claim= new Claim("","","","") ;
  constructor(private service:PublicationService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      this.isLoggedIn = true }

    let resp=this.service.getclaim();
    resp.subscribe((data)=>this.claims=data);}


  
    public changestate(id:number){
      let resp= this.service.changestateclaim(id);
      resp.subscribe((data)=>this.claims=data);
      window.location.reload();
 
      }
  }
