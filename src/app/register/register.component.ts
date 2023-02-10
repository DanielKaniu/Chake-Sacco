import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageService } from 'src/services/image.service';
import { UserService } from 'src/services/user.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //
  //This form group holds a user's data during registration.
  registration_group = new FormGroup({
    first_name: new FormControl('', Validators.required),
    second_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    contribution: new FormControl('', Validators.required),
  });
  //
  //The content of the selected image.
  image_content: any;
  //
  constructor(
    //
    //Save the user.
    private user_service: UserService,
    //
    //The snackbar.
    private _snackBar: MatSnackBar,
  ) { }
  //
  ngOnInit(): void {
  }
  //
  //Add a new user to the system.
  register(): void{
    //
    //Ensure the form fields are filled.
    if(this.registration_group.invalid !== true){
      //
      //send the value to the service responsible for saving.
      this.user_service.register(this.registration_group.getRawValue(), this.image_content).subscribe(
        //
        //Server response.
        (response: any)=>{
          //
          //Check the nature of the response received from the server.
          //
          //In this case, registration is successful.
          if(response.ok === true){
            //
            //Display a positive message.
            this.open_snackbar('Registration successful.');
          }
          //
          //In this case, registration failed.
          else{
            //
            //Display a positive message.
            this.open_snackbar('Registration failed.');
          }
        }
      );
    }
  }
  //
  //Help the user upload an image on the server.
  upload_image(evt: any) {
    //
    //Get the image attributes.
    const image: File = evt.target?.files[0];
    //
    //Lets web applications asynchronously read the contents of files (or raw data buffers) 
    //stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const file_reader = new FileReader();
    //
    //Read the uploaded image as a binary string.
    file_reader.readAsBinaryString(image);
    //
    file_reader.onload = ((event: ProgressEvent<FileReader>) => {
      //
      //The content of the file.
      const content = event.target?.result as string;
      //
      //Save the image content globally.
      this.image_content = content;
    })
  }
  //
  //Display the snackbar accordingly.
  open_snackbar(message: string) {
    console.log(message);
    //
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
      data: { msg: message },
    });
  }
}
