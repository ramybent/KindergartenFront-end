import {Component, OnInit} from '@angular/core';
import {Parent} from '../model/Parent';
import {ParentService} from '../shared/parent.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public parents: Parent[];
  constructor(private parentservice: ParentService) {
  }

  ngOnInit(): void {
  }
  public getParents(): void {
    this.parentservice.getParents().subscribe(
      (response: Parent[]) => {
        this.parents = response;
        console.log(this.parents);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
