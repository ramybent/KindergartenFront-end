import { TokenStorageService } from './../_services/token-storage.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  constructor(private service:UserService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {


    
  }

}
