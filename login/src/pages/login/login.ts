import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from "../../providers/authservice/authservice";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  result: any;
  body :any;
  resultlogin: any;
  loading: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthserviceProvider)
 {

  }

onlogin()
    {

        let login_email="tavvaforu@gmail.com";
        let login_password="123456"
          this.body={
                login_email:login_email,
                login_password:login_password
          }; 
          
            console.log(this.body); 
            this.auth.login(this.body).subscribe(data => {this.result = data
            console.log(data); 
        });
          
      
    }
}