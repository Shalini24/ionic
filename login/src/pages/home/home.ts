import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { AuthserviceProvider } from "../../providers/authservice/authservice";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login: any;

  constructor() {
this.login=LoginPage
  }

}
