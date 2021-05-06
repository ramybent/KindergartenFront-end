import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Child} from '../model/Child';
import {Observable} from 'rxjs';
import {Parent} from '../model/Parent';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient) {
  }

  public addChild(parentid: number, child: Child): Observable<void> {
    return this.http.post<void>(`http://localhost:8082/springMVC/servlet/add-child/${parentid}`, child);
  }

    public getChilds(): Observable<void> {
    return this.http.get<void>('http://localhost:8082/springMVC/servlet/retrieve-all-childs');
  }

  public deleteChilds(childid: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8082/springMVC/servlet/delete-child/${childid}`);
  }

  public putChildren(childid: number,children: Child ): Observable<void> {
    return this.http.put<void>(`http://localhost:8082/springMVC/servlet/modify-child/${childid}`,children);
  }
}
