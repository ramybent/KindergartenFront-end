import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Parent} from '../model/Parent';
import * as url from 'url';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ParentService {


  constructor(private http: HttpClient) {
  }

  public getParents(): Observable<Parent[]> {
    return this.http.get<Parent[]>('http://localhost:8082/springMVC/servlet/retrieve-all-parents');
  }
  public getParent(parentid: number): Observable<Parent> {
    return this.http.get<Parent>(`http://localhost:8082/springMVC/servlet/retrieve-parent/${parentid}`);
  }
  public putParent(parentid: number,parent: Parent ): Observable<Parent> {
    return this.http.put<Parent>(`http://localhost:8082/springMVC/servlet/modify-parent/${parentid}`,parent);
  }

}
