import { Component, OnInit } from '@angular/core';
import {ParentService} from '../../shared/parent.service';
import {Parent} from '../../model/Parent';
import {HttpErrorResponse} from '@angular/common/http';
import * as url from 'url';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profil-parent',
  templateUrl: './profil-parent.component.html',
  styleUrls: ['./profil-parent.component.css']
})
export class ProfilParentComponent implements OnInit {

  public parent: Parent;
  public editparent: Parent;
  public idparent: number;
  constructor(private parentservice: ParentService) { }

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
  public onUpdateParent(parentId: number,parent: Parent): void {
    this.parentservice.putParent(parentId,parent).subscribe(
      (response: Parent) => {
        console.log(response);
        this.onGetParent(parentId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(parent: Parent, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editparent = parent;
      button.setAttribute('data-target', '#updateParentModal');
    }

    container.appendChild(button);
    button.click();
  }
}
