import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './url';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    //
    //The http that communicates with the server.
    private http: HttpClient
  ) { }
  //
  //Save the image, which the user wants to upload, on the server.
  upload_content(content: BodyInit) {
    //
    return this.http.post(
      url + 'save/image_upload.php',
      {
        content: btoa(content as string),
      },
      { responseType: 'text' }
    );
  }
}
