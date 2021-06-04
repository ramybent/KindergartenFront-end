import {Component, OnInit} from '@angular/core';
import {Parent} from '../../model/Parent';
import {ChildService} from '../../shared/child.service';
import {Child} from '../../model/child';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {ParentService} from '../../shared/parent.service';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  public children: Child[];
  public deleteChildren: Child;
  public modifyChildren: Child;
  public unsubscribeChildren: Child;
  public parent: Parent;
  public idparent: number;
  public id: number;

  constructor(private childService: ChildService,
              private parentservice: ParentService) {
  }

  ngOnInit(): void {
    this.idparent = 1;
    this.onGetParent(this.idparent);


  }

  public onGetParent(parentId: number): void {

    this.parentservice.getParent(parentId).subscribe(
      (response: Parent) => {
        this.parent = response;
        this.children = this.parent.child;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchChild(key: string): void {

    const results: Child[] = [];
    for (const children of this.parent.child) {
      if (children.lastname.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || children.firstname.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(children);
      }
    }
    this.children = results;
    if (results.length === 0 || !key) {
      this.onGetParent(this.idparent);
    }
  }

  public onAddChildren(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.childService.addChild(this.idparent, addForm.value).subscribe(
      (response: void) => {
        console.log(response);
        this.onGetParent(this.idparent);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteChildren(childrenId: number): void {
    this.childService.deleteChilds(childrenId).subscribe(
      (response: void) => {
        console.log(response);
        this.onGetParent(this.idparent);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateChildren(id: number, children: Child): void {
    this.childService.putChildren(id, children).subscribe(
      (response: void) => {
        console.log(response);
        this.onGetParent(this.idparent);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUnsubscribeChildren(id: number): void {
    this.childService.unsubscribeChildren(id).subscribe(
      (response: void) => {
        console.log(response);
        this.onGetParent(this.idparent);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(children: Child, mode: string): void {
    const container = document.getElementById('main-containers');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addChildrenModal');
    }
    if (mode === 'edit') {
      this.modifyChildren = children;
      button.setAttribute('data-target', '#updateChildrenModal');
    }
    if (mode === 'delete') {
      this.deleteChildren = children;
      button.setAttribute('data-target', '#deleteChildrenModal');
    }
    if (mode === 'unsubscribe') {
      this.unsubscribeChildren = children;
      button.setAttribute('data-target', '#UnsubscribeChildrenModal');
    }
    container.appendChild(button);
    button.click();
  }

}
