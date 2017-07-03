
import 'rxjs/add/operator/map';
//import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthserviceProvider {
  result: Response;
  data: any;


  //body:any[];
  login_email:string;
  login_password:string;
 //apiUrl:any;
//body:{};
  apiUrl = '/api';
  constructor(public http: Http) {

    console.log('Hello AuthserviceProvider Provider');
  }

  
 
login(param)
{

 const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post( this.apiUrl+'/login', param, {headers: headers})
              .map((res: Response) => {
                  if (res) {
                      return { status: res.status, json: res.json() }
                  }
   }) .catch(error => this.handleError(error));;



 /*let body=JSON.stringify(param);


 console.log("hiii");
  console.log(body);

       this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
        return  this.http.post(this.apiUrl+'/login',body,this.options)
	      .map(this.extractDataLogin)
	      .catch(error => this.handleError(error));*/

        
}

    handleError(error) {
      console.log('errmsg2');
        console.error(error);
        return error;
        //return Observable.throw(error.json().error || 'Server error');
    }
  
extractDataLogin(res:Response){
  console.log(res.json);
let body = res.json();
    return body;
}
}