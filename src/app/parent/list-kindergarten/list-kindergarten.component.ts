import {Component, OnInit} from '@angular/core';
import {ChildService} from '../../shared/child.service';
import {KindergartenService} from '../../shared/kindergarten.service';
import {Parent} from '../../model/Parent';
import {HttpErrorResponse} from '@angular/common/http';
import {Kindergarten} from '../../model/Kindergarten';
import {Child} from '../../model/child';
import {ParentService} from '../../shared/parent.service';

@Component({
  selector: 'app-list-kindergarten',
  templateUrl: './list-kindergarten.component.html',
  styleUrls: ['./list-kindergarten.component.css']
})
export class ListKindergartenComponent implements OnInit {
  public kindergartens: Kindergarten[];
  public kindergartenJoin: Kindergarten;
  public parentId: number;
  public ChildrenId : number;
  public Month: number;
  public parent: Parent;
  constructor(private kindergartenService: KindergartenService,
              private childService: ChildService,
              private parentservice: ParentService) {
  }

  ngOnInit(): void {
    this.parentId = 1;
    this.onGetParent(this.parentId);
    this.onGetKindergartens();
  }

  public onGetParent(parentId: number): void {

    this.parentservice.getParent(parentId).subscribe(
      (response: Parent) => {
        this.parent = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchKindergarten(key: string): void {

    const results: Kindergarten[] = [];
    for (const kindergarten of this.kindergartens) {
      if (kindergarten.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 || kindergarten.address.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(kindergarten);
      }
    }
    this.kindergartens = results;
    if (results.length === 0 || !key) {
      this.onGetKindergartens();
    }
  }

  public onGetKindergartens(): void {

    this.kindergartenService.getKindergartens().subscribe(
      (response: Kindergarten[]) => {
        this.kindergartens = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onJoinKindergartens(kindergartenId: number, parentId: number, month: number, childid: number): void {

    this.kindergartenService.JoinKindergartens(kindergartenId,parentId,month,childid).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal2(kindergarten: Kindergarten, mode: string): void {
    const container = document.getElementById('main-containers2');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'join') {
      this.kindergartenJoin = kindergarten;
      button.setAttribute('data-target', '#joinModal');
    }
    container.appendChild(button);
    button.click();
  }
}
