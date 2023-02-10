import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/services/user.service';
import { User, User_details } from 'src/Types/types/types';
import { DialogComponent } from '../dialog/dialog.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
//
export class UserComponent implements OnInit, AfterViewInit {
  //
  //The users received from the database.
  users?: User['data'];
  //
  displayed_columns: string[] = [
    'image', 'first_name', 'second_name', 'email', 'contribution', 'gender', 
    'phone', 'occupation', 'location'  
  ];
  data_source: any;
  //
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }
  //
  constructor(
    //
    //The service that handles the user events.
    private user_service: UserService,
    //
    //The snackbar dialog.
    private snack_bar: MatSnackBar,
    //
    //The dialog will be useful in editing user details.
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //
    //Get the users from the database;
    this.get_user();
  }
  //
  //Fetch the users from the database.
  get_user(){
    //
    //Call the service that does the retrival.
    this.user_service.get_user().subscribe(
      //
      //The server response.
      (response: User)=>{
        //
        //Check if we get a positive/negative report from the server.
        if(response.ok === true){
          //
          //Save the users globally.
          this.users = response.data;
          //
          //Create a new data source object for the table.
          this.data_source = new MatTableDataSource<User_details>(this.users);
          //
          //Facilitate pagination for the data source.
          this.data_source.paginator = this.paginator;
        }
        //
        //At this point there is no data from the server.
        else{
          //
          //Display a negative message.
          this.open_snackbar('No user data')
        }
      }
    );
  }
  //
  //Get the user details in the row.
  get_record(user_data: any){
    this.open_dialog(user_data);
  }
  //
  //Pop up the dialog box.
  open_dialog(user_data: string): void {
    //
    const dialogRef: MatDialogRef<DialogComponent, any> = this.dialog.open(
      DialogComponent,
      {
        data: { data: user_data },
      }
    );
    //
    //Get data passed from the dialog after closing.
    dialogRef.afterClosed().subscribe((result) => {
      
    });
  }
  //
  //Display the snackbar accordingly.
  open_snackbar(message: string) {
    //
    this.snack_bar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
      data: { msg: message },
    });
  }
}