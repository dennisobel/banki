import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { resolve } from 'path';

@Injectable()
export class T24Provider {

  private offline = {
    balanceEnquiry:"http://localhost:3000/balanceEnquiry",
  }

  constructor(
    private http: Http,
    private storage: Storage
  ){}

  balanceEnquiry(){
    return new Promise((resolve,reject)=>{
      let headers = new Headers()
      headers.append("Accept","application/json");
      headers.append("Content-Type","application/json"); 

      this.storage.get('loginData')
      .then(val => {
        let body = {
            ...val
        }   
      
        this.http.post(this.offline.balanceEnquiry,body,{headers})
        .subscribe(res => {
            console.log(res.json)
            resolve(res.json());
        },(err)=>{
          reject(err)
        })    
      })
    })

  }

}
