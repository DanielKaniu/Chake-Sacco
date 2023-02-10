import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './url';
import { User } from 'src/Types/types/types';

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
  //Send the user details to the server.
  register(user_details: any, image_content: any){
    //
    return this.http.post(
      //
      //The API URL.
      url + 'save/register.php',
      //
      //The payload to send to the server.
      {
        user_details: user_details,
        image_content: btoa(image_content as string)
      },
      //
      //Specifies the format in which to return data.
      {responseType: 'json'}
    );
  }
  //
  //Retrieve the users from the database.
  get_user(){
    //
    return this.http.get<User>(
      //
      //The path to the server.
      url + 'data/get_user.php',
      //
      //The nature of the response from the server.
      {responseType: 'json'}
    );
  }
}
