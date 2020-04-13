import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  
  form = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('',Validators.required),
    description: new FormControl(''),
    completed: new FormControl(false),
    status: new FormControl('on'),
    deadline: new FormControl('',[Validators.required])
  });
  minDate = new Date();
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'success'
  }

  constructor(
    private http: Http, 
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TaskComponent>) { }

  ngOnInit() {
  }

  getCurrentDate(){
    var today:any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return today;
  }

  setInitialState(){
    this.form.setValue({
      id: null,
      title: '',
      description: '',
      completed: false,
      status: 'on',
      deadline: ''
    });
  }

  onClear(){
    this.form.reset(); 
    this.setInitialState();
  }

  onSubmit(){
    console.log("On Submit");
    // console.log(this.form.value);
    // console.log(this.form);
    let todo = {
      title: 'Task 1'
    }
    this.http.post('https://jsonplaceholder.typicode.com/todos',JSON.stringify(todo))
      .subscribe(response => {
        this.onClear();
        console.log(response);
        this.config['panelClass'] = ['notification', 'success'];
        this.openSnackBar();
        this.onClose();
      });
  }

  openSnackBar() {
    this._snackBar.open('Task Saved.', '', this.config);
  }

  onClose(){
    this.form.reset();
    this.setInitialState();
    this.dialogRef.close();
  }
}
