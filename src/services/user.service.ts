import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    //
    //Inject the HttpClient service as a dependency.
    private http: HttpClient
  ) { }
  //
  //Retrieve the users from the database.
  get_user(){
    return this.http.get(url);
  }
}
