import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bill} from '../model/bill';
import {Parent} from '../model/Parent';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) {
  }

  public getBill(id: number): Observable<Bill[]> {
    return this.http.get<Bill[]>(`http://localhost:8082/springMVC/servlet/getallbillByParent/${id}`);
  }

}
