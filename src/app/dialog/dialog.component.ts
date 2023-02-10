import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  //
  //Update the details of a member.
  update_group = new FormGroup({
    first_name: new FormControl('', Validators.required),
    second_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    contribution: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });
  //
  constructor(
    //
    //The dialog class.
    public dialogRef: MatDialogRef<DialogComponent>,
    //
    //The data passed from where this dialog is called.
    @Inject(MAT_DIALOG_DATA) public data: any,
    //
    //The snackbar.
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    //
    //Modify the values of the seleted user in the database.
    this.update_user();
  }
  //
  //Update user details in the database.
  update_user(){
    //
    //Feed the components of the form group.
    this.update_group.setValue({
      first_name: this.data.data.first_name,
      second_name: this.data.data.second_name,
      email: this.data.data.email,
      occupation: this.data.data.occupation,
      gender: this.data.data.gender,
      phone: this.data.data.phone,
      location: this.data.data.location,
      contribution: this.data.data.contribution,
      image: this.data.data.image
    });
  }
  //
  //Display the snackbar accordingly.
  open_snackbar(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
      data: {msg: message}
    });
  }
}
