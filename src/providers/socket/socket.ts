import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { resolve } from 'dns';

@Injectable()

export class SocketProvider {

  constructor(
    private socket: Socket,
    private storage: Storage){}

  
  onConnect(){
    this.socket.on('connect',()=>{
    	var sessionid = this.socket.ioSocket.id;
      console.log("socket id is: ",sessionid)
    })
  }
  

  onVerified(){
    return new Promise((resolve,reject)=>{
      resolve(
        // this.socket.on('verified',(data)=>{
        //   console.log(data)
        // })
        
      )
    })


  }

  onDisconnect(){
    this.socket.on('disconnect',()=>{
      console.log("connection lost")
    })
  }
  // Oauth
  joinApp(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('joinApp',data))
    })
  }

  signIn(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('signIn',data))
    })
  }

  signUp(data){
    this.socket.emit('signUp',data)
  }

  // Enquiries
  balanceEnq(data){
    // this.storage.get('loginData')
    // .then(res=>{
    //   let body = {
    //     ...res
    //   }  

    //   return body
      
    // })
    // .then((res)=>{
    //   // this.storage.set("login",(res.data))
    //   this.socket.emit("balanceEnq",res)
    //   console.log("heree come res of balenq",res)
    // })
    /*
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit("balanceEnq",data))
    })
    */
   
  //  this.socket.emit("balanceEnq",data)
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit("balanceEnq",data))
    })
    
    
  }

  getAccounts(data) {
    this.socket.emit('memberAccounts',data)
  }

  miniStatEnq(data){
    this.socket.emit('miniStatEnq',data)
  }

  fullStatEnq(data){
    this.socket.emit('fullStatEnq',data)
  }

  // Loans

  // Get loan balances
  getLoanBal(){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('getLoanBal'))
    })
  }
  // Apply Loan
  applyMLoan(data){
    console.log("mloan data: ",data)
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('applyMLoan',data))
    })
  }

  applyFosaAdvance(data){
    console.log("fosa data: ",data)
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('applyFosaAdvance',data))
    })
  }

  // Pay Loan
  payLoan(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('payLoan',data))
    })
  }  

  // Funds Transfer
  // Get Account Balances
  accountBalances(){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('accountBalances'))
    })
  }

  internalFundsTransfer(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('internalFundsTransfer',data))
    })
  }

  mpesaFundsTransfer(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('mpesaFundsTransfer',data))
    })
  }

  bankFundsTransfer(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('bankFundsTransfer',data))
    })
  }

  // Utilities and bills
  airtimePurchase(data){
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        data,
        ...res
      }  
      console.log(body)
      return body
      
    })
    .then((res)=>{
      console.log("airtime purchase res:",res)
      this.socket.emit("airtimePurchase",res)
    })
  }

  kopaAirtime(data){
    console.log("Inside Kopa Airtime")
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        data,
        ...res
      }  
      console.log(body)
      return body
      
    })
    .then((res)=>{
      console.log("airtime loan res:",res)
      this.socket.emit("kopaAirtime",res)
    })    
  }

  tokenPurchase(data){
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        data,
        ...res
      }  
      console.log(body)
      return body
      
    })
    .then((res)=>{
      console.log("token purchase res:",res)
      this.socket.emit("tokenPurchase",res)
    })
  }

  eStatement(data){
    /*
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        ...res
      }  
      console.log("LOGIN DATA IN E-STAT",body)
      return body
      
    })
    .then((res)=>{
      console.log("e-stat:",res)
      this.socket.emit("estatement",res)
    })  
    */
   return new Promise((resolve,reject) => {
     resolve(this.socket.emit('estatement',data))
   })  
  }

// Guarantees/Guarantors
getGuarantors(data){
  /*
  this.storage.get('loginData')
  .then(res=>{
    let body = {
      ...res
    }  
    console.log(body)
    return body
    
  })
  .then((res)=>{
    console.log("GUARANTORS:",res)
    this.socket.emit("guarantors",res)
  }) 
  */
 return new Promise((resolve,reject) => {
   resolve(this.socket.emit('guarantors',data))
 })   
}

getGuarantees(data){
  /*
  this.storage.get('loginData')
  .then(res=>{
    let body = {
      ...res
    }  
    console.log(body)
    return body
    
  })
  .then((res)=>{
    console.log("GUARANTEES:",res)
    this.socket.emit("guarantees",res)
  }) 
  */
 
  return new Promise((resolve,reject) => {
    resolve(this.socket.emit('guarantees',data))
  })
}  

  loanEligibility(data){
    // this.storage.get('loginData')
    // .then(res=>{

    //   console.log(res)
    //   return res
      
    // })
    // .then((res)=>{
    //   console.log("loan eligibility:",res)
    //   this.socket.emit("loanEligibility",res)
    // }) 
    return new Promise((resolve,reject) => {
      resolve(this.socket.emit("loanEligibility",data))
    })    
    
  }


  loanBalances(data){
    console.log("navparams data: ", data)
    // this.storage.get('loginData')
    // .then(res=>{

    //   console.log(res)
    //   return res
      
    // })
    // .then((res)=>{
    //   console.log("loan balances:",res)
    //   this.socket.emit("loanBalances",res)
    // })     
    
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit("loanBalances",data))
    })
  }  

  depositFromMpesa(data){
    console.log("DEPOSIT TO MPESA DATA: ", data)
    return new Promise((resolve,reject) => {
      resolve(this.socket.emit('depositFromMpesa',data))
    })
  }

  getMemberAccounts(){
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        ...res
      }  
      console.log(body)
      return body
      
    })
    .then((res)=>{
      console.log("MEMBERACCOUNTS:",res)
      this.socket.emit("memberAccounts",res)
    })        
  }

  getTransactionDetails(data) {
    console.log("TRANSACTION DATA:",data)
    return new Promise((resolve,reject) => {
      resolve(this.socket.emit('transaction',data))
    })    
  }

  postNonMember(data) {
    return new Promise((resolve,reject) => {
      // work on ofs
      resolve(this.socket.emit('nonmemberreg',data))
    })
  }
 

}
