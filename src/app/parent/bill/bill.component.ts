import {Component, OnInit} from '@angular/core';
import {BillService} from '../../shared/bill.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Bill} from '../../model/bill';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  generatePDF(action = 'open', bill: Bill) {
    let docDefinition = {
      content: [
        {
          text: 'Kindergarten Social Network',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'Bill',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          columns: [
            [
              {
                text: 'Your Bill',
                bold: true
              },
              {text: 'Tunis, Ariana,ariana Soughra, Esprit'},
              {text: 'Kindergarten@esprit.com'},
              {text: '+216 9845768954'}
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Bill No : ${bill.id_bill}`,
                alignment: 'right'
              },
              {
                text: 'Order Details',
                style: 'sectionHeader'
              },
              {
                table: {
                  headerRows: 1,
                  widths: ['*', 'auto', 'auto', 'auto', 'auto', 'auto'],
                  body: [
                    ['ID', 'Date', 'nbrs Month', 'TAX', 'Discount', 'Total Costs'],
                    [bill.id_bill, bill.date_bill, bill.nbrs_month, bill.tax * 100+'%', bill.discount * 100+'%', bill.total_costs]
                  ],
                  columns: [
                    [{qr: `${bill.id_bill}`, fit: '50'}],
                    [{text: 'Signature', alignment: 'right', italics: true}],
                  ]
                }
              }
            ]
          ]
        },
      ], styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };

    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }

  }
}
