import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ParentService} from '../../shared/parent.service';
import {Parent} from '../../model/Parent';
import {HttpErrorResponse} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import * as $ from 'jquery';


@Component({
  selector: 'app-list-parent',
  templateUrl: './list-parent.component.html',
  styleUrls: ['./list-parent.component.css']
})
export class ListParentComponent implements OnInit {
  public ELEMENT_DATA : Parent[];
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address'];
  public parents: Parent[];
  public parent: Parent;
  public parentId: number;
  public dataSource = new MatTableDataSource<Parent>(this.ELEMENT_DATA);
  @ViewChild('dataTable') table: ElementRef;
  datatable: any;
  constructor(private parentservice: ParentService) {


  }

  ngOnInit(): void {
    this.parentId = 1;
    this.onGetParent(this.parentId);
    this.getParents();
    this.datatable = $(this.table.nativeElement);
    this.datatable.dataTable({selectable: true, edit: true});
  }


  public getParents(): void {
    this.parentservice.getParents().subscribe(
      (response: Parent[]) => {
        this.parents = response;
        this.dataSource.data = response as Parent[];
        console.log(this.parents);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  public searchParent(key: string): void {

    const results: Parent[] = [];
    for (const parent of this.parents) {
      if (parent.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        parent.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(parent);
      }
    }
    this.parents = results;
    if (results.length === 0 || !key) {
      this.getParents();
    }
  }

}
