import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  //
    //Get the div element on which to attach the terms.
    @ViewChild('msg') msg!: ElementRef;
    //
    constructor(
      //
      //Refer to the snackbar class.
      public snackBarRef: MatSnackBarRef<SnackBarComponent>,
      //
      //The data passed from where this snackbar is called.
      @Inject(MAT_SNACK_BAR_DATA) public data: any,
    ){}
    //
    ngOnInit(): void {}
    //
    //Display the snackbar.
    show_snackbar(){
      //
      //Attach the data to the snackbar.
      const panel = document.getElementById('msg');
      console.log(panel);
      panel!.innerHTML = this.data.msg;
    }
}
