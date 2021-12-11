import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name =" ";
  public password = " ";
  constructor() { }

  ngOnInit(): void {}

  public onSubmit(){
    console.log('onSubmit');
    console.log('name= ' + this.name );
    console.log('password= ' + this.password );
  }

}
