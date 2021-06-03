import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(public http:HttpClient) { }
  url="https://localhost:44304/api/Tracker"
  GetList(name)
  {
    return this.http.delete(`${this.url}/${name}`)
  }

}
