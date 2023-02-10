import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //
  registration_group = new FormGroup({
    first_name: new FormControl(''),
    second_name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    occupation: new FormControl(''),
    phone: new FormControl(''),
    location: new FormControl(''),
    contribution: new FormControl(''),
  });
 
  //Contribution form control.
  contribution_control = new FormControl('', Validators.required);
  //
  constructor() { }
  //
  ngOnInit(): void {
  }
  //
  //Add a new user to the system.
  register(): void{
    //
    console.log(this.registration_group.value);
  }
}
