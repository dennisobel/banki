import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { resolve } from 'path';

@Injectable()
export class HttpProvider {
  private token: any;
  private user: any;

  private offline = {
      joinSaccoURL:"http://localhost:3000/joinsacco",
      verifyUserURL:"http://localhost:3000/verifyuser",
      passCodeURL:"http://localhost:3000/passcode",
      loginURL:"http://localhost:3000/login",
      logoutURL:"http://localhost:3000/logout",
      getUserURL:"http://localhost:3000/getuser",
      protectedURL:"http://localhost:3000/protected",

  }      

  constructor(
      private http: Http,
      private storage: Storage
  ){}

  joinSacco(data){
      console.log(data)
    return new Promise((resolve,reject)=>{
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json");

        // store data in local storage
        this.storage.set('signupData',data)
        .then(()=>{})     
        
        this.http.post(this.offline.joinSaccoURL, data, {headers})
            .subscribe(res => {
                let data = res.json();
                this.token = data.token;
                this.user = data.user;
                this.storage.set('token',data.token);
                this.storage.set('user',data.user);

                resolve(data);

                resolve(res.json());
            },(err)=>{
                reject(err);
            });
    });
  }

  verifyUser(data){
      let headers = new Headers()
      headers.append("Accept","application/json");
      headers.append("Content-Type","application/json");        

      // fetch signup data from local storage
      
      this.storage.get('signupData')
      .then((val)=>{            
          let body = {
              ...data,
              ...val
          }   
          console.log(body)  
          this.http.post(this.offline.verifyUserURL,body,{headers})
              .subscribe(res => {
                  console.log(res.json)
              })    
      })  
  }

  passCode(data){
      let headers = new Headers()
      headers.append("Accept","application/json");
      headers.append("Content-Type","application/json"); 
      
      // fetch signup data from local storage
      this.storage.get('signupData')
      .then((val)=>{            
          let body = {
              ...data,
              ...val
          }   
          
          this.http.post(this.offline.passCodeURL,body,{headers})
              .subscribe(res => {
                  console.log(res.json)
              })    
      })  
  }

  login(data){
    return new Promise((resolve, reject) => {
      let headers = new Headers()
      headers.append("Accept","application/json");
      headers.append("Content-Type","application/json"); 


    // store data in local storage
    
    // .then((res)=>{
        this.http.post(this.offline.loginURL,data,{headers})
        .map((res)=>res.json())
        .subscribe(res=>{
            console.log("res:",res)
            this.storage.set('loginData',data)
            resolve(res)
        })
    // })      

      // fetch signup data from local storage
      /*
      this.storage.get('loginData')
          .then((val)=>{            
              let body = {
                  ...data,
                  ...val
              }   
              
              this.http.post(this.offline.loginURL,body,{headers})
                  .map((res)=>res.json())
                  .subscribe(res => {                            
                      // let data = res.json
                      console.log(res)
                      resolve(res)
                      // this.token = data.token;

                  })    
          })      */        
      })


   
}

checkAuthentication(){
    return new Promise((resolve,reject)=>{
        // Load token if exists
        this.storage.get('token').then((value)=>{
            this.token = value;

            let headers = new Headers();
            headers.append('Authorization', this.token);

            this.http.get(this.offline.protectedURL,{headers})
                .subscribe(res => {
                    resolve(res);
                },(err)=>{
                    reject(err);
                })
        })
    })
}

logout(){
    // this.storage.set('token', '');
    return new Promise((resolve,reject)=>{
        this.http.get(this.offline.logoutURL)
        .subscribe(res => {
            resolve(res);
        },(err)=>{
            reject(err);
        })            
    })
}    

getuser(data){
    return new Promise((resolve,reject)=>{
        this.http.get(this.offline.getUserURL)
        .subscribe(res=>{
            resolve(res)
        },(err)=>{
            reject(err)
        })
    })
}


}
