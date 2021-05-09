import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Kindergarten} from '../model/Kindergarten';

@Injectable({
  providedIn: 'root'
})
export class KindergartenService {

  constructor(private http: HttpClient) {
  }

  public getKindergartens(): Observable<Kindergarten[]> {
    return this.http.get<Kindergarten[]>('http://localhost:8082/springMVC/servlet/retrieve-all-kindergartens');
  }

  public JoinKindergartens(kindergartenId: number, parentId: number, month: number, childid: number): Observable<void> {
    return this.http.post<void>(`http://localhost:8082/springMVC/servlet//join-kindergarten/${kindergartenId}/${parentId}/${month}/${childid}`,kindergartenId+parentId+month+childid);
  }
}
