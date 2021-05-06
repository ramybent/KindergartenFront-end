import {Component, OnInit} from '@angular/core';
import {BillService} from '../../shared/bill.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Bill} from '../../model/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  public bills: Bill[];

  constructor(private billService: BillService) {
  }

  ngOnInit(): void {
    this.onGetBill(1);
  }

  public onGetBill(Id: number): void {

    this.billService.getBill(Id).subscribe(
      (response: Bill[]) => {
        this.bills = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
