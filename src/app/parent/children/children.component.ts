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
  public parent: Parent;
  public idparent: number;

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
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
    container.appendChild(button);
    button.click();
  }
}
