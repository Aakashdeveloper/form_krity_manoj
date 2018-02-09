import { Component } from '@angular/core';
import {Employee} from './employee/employee.model';
import { NgForm } from '@angular/forms';
import {FormPoster} from './services/form-poster.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages=["NodeJs","AngularJs","ReactJS"];
  model = new Employee('Aakash','Handa',0,true,'male','NodeJs')

  firstToUpper(value:string){
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
    else
      this.model.firstName=value
  }

  constructor(private _formPoster:FormPoster){}

  submitForm(form:NgForm){
    this._formPoster.postEmployeeForm(this.model)
      .subscribe(
        data=>console.log('success',data),
        err=>console.log('error',err)
      )
  }
}

/*
ng-untouch ng-pristine ng-inavlid
ng-touch   ng-dirty    ng-valid*/