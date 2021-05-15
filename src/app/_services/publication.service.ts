import { Publication } from './../publication';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }
  public doAddpublication(publication){
    return this.http.post("http://localhost:9130/api/Publication/addPublication",publication,{responseType:'text' as 'json'});
  }

  public getPublication(){
    return this.http.get("http://localhost:9130/api/Publication/getallpublication");
  }
  public getComment(){
    return this.http.get("http://localhost:9130/api/Publication/getcomment");
  }

  public deletepub(id){
    return this.http.delete("http://localhost:9130/api/Publication/deletePublication/"+id);
  }

  public doAddreact(publication){
    return this.http.post("http://localhost:9130/api/Publication/addPublication",publication,{responseType:'text' as 'json'});
  }

  public AddreactPublication(idp) {
    return this.http.post("http://localhost:9130/api/Publication/addReactToPublication/"+idp,{responseType:'text' as 'json'});
  }

  public updatePublication(id: number, value: any): Observable<Object> {
    return this.http.put("http://localhost:9130/api/Publication/updatePublication/"+id, value);
  }
  public addcommentPublication(id: number, value: any): Observable<Object> {
    return this.http.post("http://localhost:9130/api/Publication/addcomemntToPublication/"+id, value);
  }


}
