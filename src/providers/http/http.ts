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
      singleUserURL: "http://localhost:3000/singleUser/",
      protectedURL:"http://localhost:3000/protected",
      submitPhoneNumberURL: "http://localhost:3000/submitPhoneNumber",
      submitOtpURL: "http://localhost:3000/submitOtp",
      submitMnoURL: "http://localhost:3000/submitMno",
      submitPassword: "http://localhost:3000/submitPassword",
      submitLogin: "http://localhost:3000/submitLogin",
      submitPINURL: "http://localhost:3000/submitPIN",
      mpesaURL: "http://localhost:3000/depositFromMpesa",
      imageURL: "http://localhost:3000/imageupload"
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
      
      console.log("inside login, send this login data to server:",data)
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
    console.log("inside checkAuth")
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

submitPhoneNumber(phoneNumber) {
    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 
        
        this.http.post(this.offline.submitPhoneNumberURL,phoneNumber,{headers})
        .subscribe(res => {
            console.log('RES: ', res.json())
            this.storage.set('ID',res.json().docs._id)
            resolve(res.json())
        })
    })
}

singleUser(id){
    return new Promise((resolve,reject) => {
        this.http.get(this.offline.singleUserURL + id)
        .subscribe(res => {
            console.log("SINGLE USER:",res.json())
            resolve(res.json())
        })
    })
}

submitOTP(otp) {
    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 

        this.http.post(this.offline.submitOtpURL,otp,{headers})
        .subscribe(res => {
            console.log("OTP RES: ", res.json())
            resolve(res.json())
        })
    })
}

submitMNO(mno) {
    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 

        this.http.post(this.offline.submitMnoURL,mno,{headers})
        .subscribe(res => {
            console.log("MNO RES: ", res.json())
            resolve(res.json())
        })
    })    
}

submitPassword(data) {
    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 

        this.http.post(this.offline.submitPassword,data,{headers})
        .subscribe(res => {
            console.log("MNO RES: ", res.json())
            resolve(res.json())
        })
    })    
}

submitLogin(data) {
    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 

        this.http.post(this.offline.submitLogin,data,{headers})
        .subscribe(res => {
            console.log("LOGIN RES: ", res.json())
            resolve(res.json())
        })
    }) 
}

submitPIN(data) {


    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 

        this.http.post(this.offline.submitPINURL,data,{headers})
        .subscribe(res => {
            console.log("PIN RES: ", res.json())
            resolve(res.json())
        })
    }) 
    
}

depositFromMpesa(data) {
    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 

        this.http.post(this.offline.mpesaURL,data,{headers})
        .subscribe(res => {
            console.log("PIN RES: ", res.json())
            resolve(res.json())
        })

    })
}

uploadImage(data) {
    return new Promise((resolve,reject) => {
        let headers = new Headers()
        headers.append("Accept","application/json");
        headers.append("Content-Type","application/json"); 

        this.http.post(this.offline.imageURL,data,{headers})
        .subscribe(res => {
            console.log("PIN RES: ", res.json())
            resolve(res.json())
        })
    })
}
}
