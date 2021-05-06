import { Publication } from './../publication';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  public deletepub(id){
    return this.http.delete("http://localhost:9130/api/Publication/deletePublication/"+id);
  }






}
